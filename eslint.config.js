import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import tsParser from '@typescript-eslint/parser';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['src/**/*.ts', 'src/**/*.vue'],
        ignores: ['**/*.config.js', '**/*.d.ts'],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
            },
        },
        rules: {
            semi: 'error',
            'prefer-const': 'error',
        },
    },
];

import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    {
        ignores: [
            '**/public',
            '**/node_modules',
			'**/jsconfig.json',
			'**/vite.config.js',
			'**/package-lock.json',
			'**/prettier.config.js',
        ],
    },
    eslintJs.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
	eslintConfigPrettier,
    {
		plugins: {
			'unused-imports': unusedImports,
			'simple-import-sort': simpleImportSort,
			'no-relative-import-paths': noRelativeImportPaths,
		},
        files: [
            '**/*.{js,vue}',
        ],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: globals.browser,
        },
        rules: {
			'vue/component-api-style': ['error', ['script-setup']], // Use script setup
			'ordered-imports': [0], // Allow/disallow ordered imports
			'no-trailing-spaces': 0, // Allow/disallow trailing spaces
			'eol-last': 1, // Enforce newline at end of files
			'func-style': [
				'error',
				'declaration',
				{
					allowArrowFunctions: true,
				},
			], // Enforce function style
			'no-var': 2, // Disallow 'var' keyword
			'no-relative-import-paths/no-relative-import-paths': [
				'error',
				{
					prefix: '@',
					rootDir: 'src',
					allowSameFolder: true,
				},
			], // No relative imports
			'no-unused-vars': 'off', // Disable ESLint's 'no-unused-vars'
			'unused-imports/no-unused-imports': 'error', // Disallow unused imports
			'unused-imports/no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
				},
			], // Disallow unused variables and arguments
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
    },
];

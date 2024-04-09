// @ts-check
//import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  //eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/adjacent-overload-signatures":1,
      "@typescript-eslint/array-type":1
    }
  },
  {
    files: ['*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
);
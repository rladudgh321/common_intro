import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylisticJs from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      '@stylistic': stylisticJs,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/arrow-parens': ['error'],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
      '@stylistic/jsx-quotes': ['error'],
      '@stylistic/semi': ['error'],
      '@stylistic/max-len': ['warn', { code: 80, tabWidth: 2 }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/keyword-spacing': ['error'],
      '@stylistic/space-before-blocks': ['error'],
      '@stylistic/space-infix-ops': ['error'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'comma', // 쉼표 사용
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma', // 단일 라인에서도 쉼표 사용
            requireLast: false,
          },
        },
      ],
    },
  },
  ...compat.config({
    extends:['next', "next/core-web-vitals"],
    rules:{
      // 추가할 rule이 있으면 이곳에
    }
  }),
];

export default eslintConfig;

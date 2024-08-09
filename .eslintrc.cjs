/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}',
      ],
      extends: [
        'plugin:playwright/recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@stylistic',
    'vue',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-var': ['warn'],
    'prefer-const': ['warn'],
    'sort-imports': ['warn', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: true,
    }],
    '@stylistic/quotes': ['warn', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    '@stylistic/quote-props': ['warn', 'as-needed'],
    '@stylistic/comma-dangle': ['warn', { objects: 'always-multiline', arrays: 'always-multiline' }],
    '@stylistic/indent': ['warn', 2, {
      ignoredNodes: ['TemplateLiteral'],
      SwitchCase: 1,
    }],
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/space-before-blocks': ['warn', 'always'],
    '@stylistic/semi': ['warn', 'never'],
    '@stylistic/eol-last': ['warn', 'always'],
    '@stylistic/no-trailing-spaces': ['warn', { skipBlankLines: true, ignoreComments: false }],
    '@stylistic/keyword-spacing': ['warn', { after: true, before: true }],
    '@stylistic/comma-spacing': ['warn', { after: true }],
    '@stylistic/linebreak-style': [
      'error',
      'unix',
    ],
  },

}

module.exports = {
  extends: [
    '.eslint.react.js',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    'max-lines-per-function': ['warn', { max: 200 }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/destructuring-assignment": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-shadow": "off",
  },
};

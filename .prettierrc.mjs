/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  // config
  singleQuote: true,
  jsxSingleQuote: false,
  printWidth: 80,
  arrowParens: "avoid",
  endOfLine: "lf",
  trailingComma: "all",
  semi: true,
  tabWidth: 2
};

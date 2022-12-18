module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 100,
  tabWidth: 2,
  overrides: [
    {
      files: "src/lib/chatbot.js",
      options: {
        printWidth: 80
      }
    }
  ]
};
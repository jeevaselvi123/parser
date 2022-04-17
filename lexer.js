const moo = require("moo");

const lexer = moo.compile({
  word: /[a-zA-Z]+/,
  comma: / ?, ?/,
  space: / /,
  period: /\./,
  nl: { match: /\n+/, lineBreaks: true },
});

module.exports = lexer;

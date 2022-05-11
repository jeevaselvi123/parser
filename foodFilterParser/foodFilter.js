// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const moo = require("moo")
  const lexer = moo.compile({
	starters: ['french onion soup','spring rolls','veg salad','tomato brushchetta'],
	desserts: ['apple pie with cream','vanilla ice cream','fruit salad','lemon meringue pie'],
	sideDishes: ['mixed green salad','garden vegetables','french fries','garlic bread'],
	mainCourse: ['grilled salmon with dill sauce','eggplant lasagne','chicken and mushroom pie','roast beef with vegetables'],
	category: ['starters','desserts','side dishes','main course'],
	connector: ['and','or'],
	wordSpace: /[ \t]+/,
	quotes: /"/,
	colon:/:/,
	comma:/,/,
	quantity: /[0-9]+/,	
  });

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "main$ebnf$1", "symbols": ["sentence"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "sentence"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$ebnf$1"]},
    {"name": "sentence$ebnf$1", "symbols": ["sequence"]},
    {"name": "sentence$ebnf$1", "symbols": ["sentence$ebnf$1", "sequence"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentence", "symbols": ["sentence$ebnf$1"]},
    {"name": "sentence", "symbols": ["sequence", "comma", "space"]},
    {"name": "sentence", "symbols": ["sequence", "space", "connector", "space"]},
    {"name": "sequence", "symbols": ["foodcategory", "space", "separator", "space", "foodvalue"]},
    {"name": "sequence", "symbols": ["foodcategory"]},
    {"name": "foodcategory", "symbols": [(lexer.has("category") ? {type: "category"} : category)]},
    {"name": "space", "symbols": [(lexer.has("wordSpace") ? {type: "wordSpace"} : wordSpace)]},
    {"name": "separator", "symbols": [(lexer.has("colon") ? {type: "colon"} : colon)]},
    {"name": "connector", "symbols": [(lexer.has("connector") ? {type: "connector"} : connector)]},
    {"name": "comma", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma)]},
    {"name": "foodvalue", "symbols": [(lexer.has("quotes") ? {type: "quotes"} : quotes), (lexer.has("starters") ? {type: "starters"} : starters), (lexer.has("quotes") ? {type: "quotes"} : quotes)]},
    {"name": "foodvalue", "symbols": [(lexer.has("quotes") ? {type: "quotes"} : quotes), (lexer.has("desserts") ? {type: "desserts"} : desserts), (lexer.has("quotes") ? {type: "quotes"} : quotes)]},
    {"name": "foodvalue", "symbols": [(lexer.has("quotes") ? {type: "quotes"} : quotes), (lexer.has("sideDishes") ? {type: "sideDishes"} : sideDishes), (lexer.has("quotes") ? {type: "quotes"} : quotes)]},
    {"name": "foodvalue", "symbols": [(lexer.has("quotes") ? {type: "quotes"} : quotes), (lexer.has("mainCourse") ? {type: "mainCourse"} : mainCourse), (lexer.has("quotes") ? {type: "quotes"} : quotes)]},
    {"name": "foodvalue", "symbols": [(lexer.has("quotes") ? {type: "quotes"} : quotes), (lexer.has("quantity") ? {type: "quantity"} : quantity), (lexer.has("quotes") ? {type: "quotes"} : quotes)]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();

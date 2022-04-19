// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
  function id(x) {
    return x[0];
  }
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      { name: "expression", symbols: ["input"] },
      { name: "input", symbols: ["exp"] },
      { name: "input", symbols: ["exp", "_", "logic", "_", "exp"] },
      { name: "input", symbols: ["input", "_", "logic", "_", "input"] },
      { name: "exp", symbols: ["exp1"] },
      { name: "exp", symbols: ["exp2"] },
      { name: "exp", symbols: ["exp3"] },
      { name: "exp", symbols: ["exp4"] },
      { name: "exp", symbols: ["exp5"] },
      {
        name: "exp1",
        symbols: ["category1", "_", "colon", "_", "category1items"],
      },
      {
        name: "exp2",
        symbols: ["category2", "_", "colon", "_", "category2items"],
      },
      {
        name: "exp3",
        symbols: ["category3", "_", "colon", "_", "category3items"],
      },
      {
        name: "exp4",
        symbols: ["category4", "_", "colon", "_", "category4items"],
      },
      {
        name: "exp5",
        symbols: ["category5", "_", "colon", "_", "category5items"],
      },
      { name: "_", symbols: [{ literal: " " }] },
      { name: "colon", symbols: [{ literal: ":" }] },
      {
        name: "logic$subexpression$1",
        symbols: [/[oO]/, /[rR]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "logic", symbols: ["logic$subexpression$1"] },
      {
        name: "logic$subexpression$2",
        symbols: [/[aA]/, /[nN]/, /[dD]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "logic", symbols: ["logic$subexpression$2"] },
      {
        name: "logic$subexpression$3",
        symbols: [/[oO]/, /[rR]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "logic", symbols: ["logic$subexpression$3"] },
      {
        name: "logic$subexpression$4",
        symbols: [/[aA]/, /[nN]/, /[dD]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "logic", symbols: ["logic$subexpression$4"] },
      {
        name: "category1$subexpression$1",
        symbols: [
          /[bB]/,
          /[eE]/,
          /[vV]/,
          /[eE]/,
          /[rR]/,
          /[aA]/,
          /[gG]/,
          /[eE]/,
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1", symbols: ["category1$subexpression$1"] },
      {
        name: "category2$subexpression$1",
        symbols: [
          /[cC]/,
          /[oO]/,
          /[nN]/,
          /[tT]/,
          /[iI]/,
          /[nN]/,
          /[eE]/,
          /[nN]/,
          /[tT]/,
          /[aA]/,
          /[lL]/,
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category2", symbols: ["category2$subexpression$1"] },
      {
        name: "category3$subexpression$1",
        symbols: [/[iI]/, /[tT]/, /[aA]/, /[lL]/, /[iI]/, /[aA]/, /[nN]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category3", symbols: ["category3$subexpression$1"] },
      {
        name: "category4$subexpression$1",
        symbols: [
          /[sS]/,
          /[oO]/,
          /[fF]/,
          /[tT]/,
          /[dD]/,
          /[rR]/,
          /[iI]/,
          /[nN]/,
          /[kK]/,
          /[sS]/,
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category4", symbols: ["category4$subexpression$1"] },
      {
        name: "category5$subexpression$1",
        symbols: [
          /[sS]/,
          /[oO]/,
          /[uU]/,
          /[tT]/,
          /[hH]/,
          /[iI]/,
          /[nN]/,
          /[dD]/,
          /[iI]/,
          /[aA]/,
          /[nN]/,
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category5", symbols: ["category5$subexpression$1"] },
      {
        name: "category1items$subexpression$1",
        symbols: [
          { literal: '"' },
          /[cC]/,
          /[uU]/,
          /[cC]/,
          /[uU]/,
          /[mM]/,
          /[bB]/,
          /[eE]/,
          /[rR]/,
          { literal: " " },
          /[sS]/,
          /[mM]/,
          /[oO]/,
          /[oO]/,
          /[tT]/,
          /[hH]/,
          /[iI]/,
          /[eE]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1items", symbols: ["category1items$subexpression$1"] },
      {
        name: "category1items$subexpression$2",
        symbols: [/[kK]/, /[eE]/, /[sS]/, /[aA]/, /[rR]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1items", symbols: ["category1items$subexpression$2"] },
      {
        name: "category1items$subexpression$3",
        symbols: [
          { literal: '"' },
          /[wW]/,
          /[aA]/,
          /[tT]/,
          /[eE]/,
          /[rR]/,
          /[mM]/,
          /[eE]/,
          /[lL]/,
          /[oO]/,
          /[nN]/,
          { literal: " " },
          /[sS]/,
          /[hH]/,
          /[aA]/,
          /[kK]/,
          /[eE]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1items", symbols: ["category1items$subexpression$3"] },
      {
        name: "category1items$subexpression$4",
        symbols: [
          /[lL]/,
          /[oO]/,
          /[vV]/,
          /[eE]/,
          /[bB]/,
          /[iI]/,
          /[tT]/,
          /[eE]/,
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1items", symbols: ["category1items$subexpression$4"] },
      {
        name: "category1items$subexpression$5",
        symbols: [
          { literal: '"' },
          /[hH]/,
          /[oO]/,
          /[tT]/,
          { literal: " " },
          /[cC]/,
          /[hH]/,
          /[oO]/,
          /[cC]/,
          /[oO]/,
          /[lL]/,
          /[aA]/,
          /[tT]/,
          /[eE]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1items", symbols: ["category1items$subexpression$5"] },
      {
        name: "category1items$subexpression$6",
        symbols: [
          { literal: '"' },
          /[jJ]/,
          /[aA]/,
          /[mM]/,
          /[uU]/,
          /[nN]/,
          { literal: " " },
          /[fF]/,
          /[iI]/,
          /[zZ]/,
          /[zZ]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category1items", symbols: ["category1items$subexpression$6"] },
      {
        name: "category2items$subexpression$1",
        symbols: [
          { literal: '"' },
          /[bB]/,
          /[aA]/,
          /[tT]/,
          /[tT]/,
          /[eE]/,
          /[rR]/,
          { literal: " " },
          /[fF]/,
          /[iI]/,
          /[sS]/,
          /[hH]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category2items", symbols: ["category2items$subexpression$1"] },
      {
        name: "category2items$subexpression$2",
        symbols: [
          { literal: '"' },
          /[bB]/,
          /[rR]/,
          /[oO]/,
          /[cC]/,
          /[cC]/,
          /[oO]/,
          /[lL]/,
          /[iI]/,
          { literal: " " },
          /[bB]/,
          /[aA]/,
          /[kK]/,
          /[eE]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category2items", symbols: ["category2items$subexpression$2"] },
      {
        name: "category2items$subexpression$3",
        symbols: [
          { literal: '"' },
          /[bB]/,
          /[uU]/,
          /[tT]/,
          /[tT]/,
          /[eE]/,
          /[rR]/,
          /[eE]/,
          /[dD]/,
          { literal: " " },
          /[pP]/,
          /[oO]/,
          /[tT]/,
          /[aA]/,
          /[tT]/,
          /[oO]/,
          /[eE]/,
          /[sS]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category2items", symbols: ["category2items$subexpression$3"] },
      {
        name: "category2items$subexpression$4",
        symbols: [
          { literal: '"' },
          /[pP]/,
          /[aA]/,
          /[nN]/,
          /[eE]/,
          /[eE]/,
          /[rR]/,
          { literal: " " },
          /[sS]/,
          /[tT]/,
          /[eE]/,
          /[aA]/,
          /[kK]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category2items", symbols: ["category2items$subexpression$4"] },
      {
        name: "category2items$subexpression$5",
        symbols: [
          { literal: '"' },
          /[cC]/,
          /[hH]/,
          /[iI]/,
          /[cC]/,
          /[kK]/,
          /[eE]/,
          /[nN]/,
          { literal: " " },
          { literal: "&" },
          { literal: " " },
          /[cC]/,
          /[hH]/,
          /[eE]/,
          /[eE]/,
          /[sS]/,
          /[eE]/,
          { literal: " " },
          /[sS]/,
          /[aA]/,
          /[lL]/,
          /[aA]/,
          /[dD]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category2items", symbols: ["category2items$subexpression$5"] },
      {
        name: "category3items$subexpression$1",
        symbols: [/[pP]/, /[aA]/, /[sS]/, /[tT]/, /[aA]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category3items", symbols: ["category3items$subexpression$1"] },
      {
        name: "category3items$subexpression$2",
        symbols: [/[pP]/, /[iI]/, /[zZ]/, /[zZ]/, /[aA]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category3items", symbols: ["category3items$subexpression$2"] },
      {
        name: "category3items$subexpression$3",
        symbols: [/[lL]/, /[aA]/, /[sS]/, /[aA]/, /[gG]/, /[nN]/, /[eE]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category3items", symbols: ["category3items$subexpression$3"] },
      {
        name: "category3items$subexpression$4",
        symbols: [/[gG]/, /[eE]/, /[lL]/, /[aA]/, /[tT]/, /[oO]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category3items", symbols: ["category3items$subexpression$4"] },
      {
        name: "category3items$subexpression$5",
        symbols: [
          { literal: '"' },
          /[bB]/,
          /[aA]/,
          /[gG]/,
          /[nN]/,
          /[aA]/,
          { literal: " " },
          /[cC]/,
          /[aA]/,
          /[uU]/,
          /[dD]/,
          /[aA]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category3items", symbols: ["category3items$subexpression$5"] },
      {
        name: "category4items$subexpression$1",
        symbols: [
          { literal: '"' },
          /[cC]/,
          /[oO]/,
          /[cC]/,
          /[oO]/,
          { literal: " " },
          /[cC]/,
          /[oO]/,
          /[lL]/,
          /[aA]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category4items", symbols: ["category4items$subexpression$1"] },
      {
        name: "category4items$subexpression$2",
        symbols: [
          { literal: '"' },
          /[pP]/,
          /[eE]/,
          /[pP]/,
          /[sS]/,
          /[iI]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category4items", symbols: ["category4items$subexpression$2"] },
      {
        name: "category4items$subexpression$3",
        symbols: [/[mM]/, /[aA]/, /[zZ]/, /[aA]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category4items", symbols: ["category4items$subexpression$3"] },
      {
        name: "category4items$subexpression$4",
        symbols: [/[mM]/, /[iI]/, /[rR]/, /[aA]/, /[nN]/, /[dD]/, /[aA]/],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category4items", symbols: ["category4items$subexpression$4"] },
      {
        name: "category5items$subexpression$1",
        symbols: [
          { literal: '"' },
          /[kK]/,
          /[eE]/,
          /[rR]/,
          /[aA]/,
          /[lL]/,
          /[aA]/,
          { literal: " " },
          /[fF]/,
          /[iI]/,
          /[sS]/,
          /[hH]/,
          { literal: " " },
          /[cC]/,
          /[uU]/,
          /[rR]/,
          /[rR]/,
          /[yY]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category5items", symbols: ["category5items$subexpression$1"] },
      {
        name: "category5items$subexpression$2",
        symbols: [
          { literal: '"' },
          /[mM]/,
          /[aA]/,
          /[sS]/,
          /[aA]/,
          /[lL]/,
          { literal: " " },
          /[dD]/,
          /[oO]/,
          /[sS]/,
          /[aA]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category5items", symbols: ["category5items$subexpression$2"] },
      {
        name: "category5items$subexpression$3",
        symbols: [
          { literal: '"' },
          /[cC]/,
          /[hH]/,
          /[iI]/,
          /[cC]/,
          /[kK]/,
          /[eE]/,
          /[nN]/,
          { literal: " " },
          /[cC]/,
          /[hH]/,
          /[eE]/,
          /[tT]/,
          /[tT]/,
          /[iI]/,
          /[nN]/,
          /[aA]/,
          /[dD]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category5items", symbols: ["category5items$subexpression$3"] },
      {
        name: "category5items$subexpression$4",
        symbols: [
          { literal: '"' },
          /[aA]/,
          /[nN]/,
          /[dD]/,
          /[hH]/,
          /[rR]/,
          /[aA]/,
          { literal: " " },
          /[cC]/,
          /[hH]/,
          /[iI]/,
          /[cC]/,
          /[kK]/,
          /[eE]/,
          { literal: " " },
          /[cC]/,
          /[uU]/,
          /[rR]/,
          /[rR]/,
          /[yY]/,
          { literal: '"' },
        ],
        postprocess: function (d) {
          return d.join("");
        },
      },
      { name: "category5items", symbols: ["category5items$subexpression$4"] },
    ],
    ParserStart: "expression",
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();

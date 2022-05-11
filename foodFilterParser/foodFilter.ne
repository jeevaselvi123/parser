@{%
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

%}

@lexer lexer

main -> sentence :+ 

sentence -> sequence:+ | sequence comma space | sequence space connector space

sequence -> foodcategory space separator space foodvalue | foodcategory

foodcategory -> %category 

space -> %wordSpace

separator -> %colon

connector -> %connector

comma -> %comma

foodvalue -> %quotes %starters %quotes | %quotes %desserts %quotes | %quotes %sideDishes %quotes | %quotes %mainCourse %quotes|  %quotes %quantity %quotes
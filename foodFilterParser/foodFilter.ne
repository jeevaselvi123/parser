expression -> input

input -> exp | exp _ logic _ exp | input _ logic _ input
 
exp -> exp1 | exp2 | exp3 | exp4 | exp5

exp1 ->  category1 _ colon _ category1items
exp2 ->  category2 _ colon _ category2items
exp3 ->  category3 _ colon _ category3items
exp4 ->  category4 _ colon _ category4items
exp5 ->  category5 _ colon _ category5items

_ -> " "
colon -> ":" 
logic -> "OR"i | "AND"i | "or"i | "and"i

category1 -> "Beverage"i
category2 -> "Continental"i 
category3 -> "Italian"i
category4 -> "SoftDrinks"i
category5 -> "SouthIndian"i

category1items -> "\"Cucumber Smoothie\""i  | "Kesar"i | "\"Watermelon Shake\""i | "LoveBite"i | "\"Hot Chocolate\""i | "\"Jamun Fizz\""i

category2items -> "\"Batter Fish\""i |"\"Broccoli Bake\""i | "\"Buttered Potatoes\""i | "\"Paneer Steak\""i | "\"Chicken & Cheese Salad\""i

category3items -> "Pasta"i | "Pizza"i | "Lasagne"i | "Gelato"i |"\"Bagna Cauda\""i

category4items -> "\"Coco Cola\""i | "\"Pepsi\""i | "Maza"i | "Miranda"i

category5items -> "\"Kerala Fish Curry\""i | "\"Masal Dosa\""i | "\"Chicken Chettinad\""i | "\"Andhra Chicke Curry\""i
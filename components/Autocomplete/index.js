import { EmojiHappyIcon, EmojiSadIcon } from "@heroicons/react/solid";
import Nearley from "nearley";
import React, { useState } from "react";
import { Hint } from "react-autocomplete-hint";
import grammar from "../../foodFilterParser/foodFilter";
import CardItems from "../CardItems";

export default function Autocomplete() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const parser = new Nearley.Parser(Nearley.Grammar.fromCompiled(grammar));

  const method = (temp) => {
    if (Array.isArray(temp)) {
      method();
    }
  };

  const onChange = (value) => {
    if (text.length === 0) setStatus(false);
    setText(value);
    console.log(text.toLowerCase());
    try {
      parser.feed(value.toLowerCase());
      var parsedData = JSON.stringify(parser.results);
      var temp = parsedData.toString();

      console.log(parsedData.includes("starters"), temp.replace("[", ""));

      if (parsedData && parsedData.length === 0) setStatus(false);
      else if (parsedData && parsedData[0].length > 0) setStatus(true);
    } catch (parseError) {
      console.log("Error at character " + parseError.message);
      setType(parseError.message);
      setStatus(false);
    }
  };

  var hintArray = [
    "starters",
    "desserts",
    "side dishes",
    "main course",
    "grilled salmon with dill sauce",
    "eggplant lasagne",
    "chicken and mushroom pie",
    "roast beef with vegetables",
    "mixed green salad",
    "garden vegetables",
    "french fries",
    "garlic bread",
    "apple pie with cream",
    "vanilla ice cream",
    "fruit salad",
    "lemon meringue pie",
    "french onion soup",
    "spring rolls",
    "veg salad",
    "tomato brushchetta",
  ];
  const starters = [
    "French onion soup",
    "Spring rolls",
    "Veg salad",
    "Tomato brushchetta",
  ];
  const desserts = [
    "Apple pie with cream",
    "Vanilla ice cream",
    "Fruit salad",
    "Lemon meringue pie",
  ];
  const sideDishes = [
    "Mixed green salad",
    "Garden vegetables",
    "French fries",
    "Garlic bread",
  ];
  const mainCourse = [
    "Grilled salmon with dill sauce",
    "Eggplant lasagne",
    "Chicken and mushroom pie",
    "Roast beef with vegetables",
  ];

  // let category = [
  //   {
  //     starters: [
  //       "French onion soup",
  //       "Spring rolls",
  //       "Veg salad",
  //       "Tomato brushchetta",
  //     ],
  //     desserts: [
  //       "Apple pie with cream",
  //       "Vanilla ice cream",
  //       "Fruit salad",
  //       "Lemon meringue pie",
  //     ],
  //     sideDishes: [
  //       "Mixed green salad",
  //       "Garden vegetables",
  //       "French fries",
  //       "Garlic bread",
  //     ],
  //     mainCourse: [
  //       "Grilled salmon with dill sauce",
  //       "Eggplant lasagne",
  //       "Chicken and mushroom pie",
  //       "Roast beef with vegetables",
  //     ],
  //   },
  // ];

  return (
    <>
      <div className=" text-center mt-2">
        <h5 className="text-2xl p-2">Try searching for required menu items</h5>
        <code className="font-serif font-bold">{`Starters : [${starters.toString()}], Desserts: [${desserts.toString()}],  Side Dishes: [${sideDishes.toString()}],  Main Course: [${sideDishes.toString()}]`}</code>
        <br />
        <br />
        <div className="flex flex-auto justify-center">
          {status && text.length > 0 && (
            <EmojiHappyIcon className="w-10 h-10 fill-green-600 animate-bounce"></EmojiHappyIcon>
          )}
          {!status && text.length > 0 && (
            <EmojiSadIcon className="w-10 h-10 fill-red-600 animate-bounce"></EmojiSadIcon>
          )}
          <br />
          <Hint options={hintArray}>
            <input
              className=" ml-4 p-1.5 border-orange-400 w-full border-2 focus:outline-none"
              value={text}
              placeholder=" Category : FoodType"
              onChange={(e) => onChange(e.target.value)}
            />
          </Hint>
          <br />
          <br />
          <br />
        </div>

        {text.toLowerCase().includes("starters") && (
          <CardItems
            id="Starter"
            data={starters}
            image="starters.jpg"
          ></CardItems>
        )}
        {text.toLowerCase().includes("desserts") && (
          <CardItems id="Dessert" data={desserts}></CardItems>
        )}
        {text.toLowerCase().includes("side dishes") && (
          <CardItems id="Side Dish" data={sideDishes}></CardItems>
        )}
        {text.toLowerCase().includes("main course") && (
          <CardItems id="Main Course" data={mainCourse}></CardItems>
        )}
      </div>
    </>
  );
}

import {
  EmojiHappyIcon,
  EmojiSadIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Nearley from "nearley";
import { useState } from "react";
import grammar from "../Parser/foodFilter";

export default function Home() {
  const [value, setValue] = useState();
  const [status, setStatus] = useState(false);

  const setClick = () => {
    const parser = new Nearley.Parser(Nearley.Grammar.fromCompiled(grammar));

    try {
      parser.feed(value);
      var parsedData = JSON.stringify(parser.results);
      console.log(parsedData);
      if (parsedData && parsedData[0] === null && parsedData.length === 0)
        setStatus(false);
      else if (parsedData && parsedData[0] && parsedData[0].length > 0)
        setStatus(true);
    } catch (parseError) {
      console.log("Error at character " + parseError.message);
      alert("Entered wrong input.Valid format key:value pair");
      setStatus(false);
    }
  };
  return (
    <>
      <div className="flex min-h-full w-full justify-center p-8">
        <div className="m-10 flex flex-row justify-between">
          <div className="basis-1/12">
            <div className="w-screen rounded-3xl bg-white shadow-lg text-center">
              <p className="pt-2 font-semibold text-2xl">
                Filter the food items based on the specific category
              </p>
              <div className=" pt-6 pl-4 justify-center">
                <div className=" flex flex-row justify-center">
                  Search <SearchIcon className="w-5 h-5 m-1"></SearchIcon>
                </div>
                <div className="flex items-center pr-8">
                  {status && (
                    <EmojiHappyIcon className="w-10 h-10 fill-green-600"></EmojiHappyIcon>
                  )}
                  {!status && (
                    <EmojiSadIcon className="w-10 h-10 fill-red-600 animate-bounce"></EmojiSadIcon>
                  )}
                  <input
                    onChange={(e) =>
                      setValue((prevValue) => (prevValue = e.target.value))
                    }
                    placeholder="Type the food category followed by food item ie.Beverage : Kesar"
                    id="inputField"
                    className="m-4 w-[100%] border-2 border-black text-center"
                    type="text"
                  />
                </div>
              </div>
              <div className="p-4">
                <button
                  onClick={setClick}
                  className="p-2 font-semibold border-b-2 border-x-2 rounded-lg"
                >
                  Parse String
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

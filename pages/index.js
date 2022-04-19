import {
  EmojiHappyIcon,
  EmojiSadIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import Nearley from "nearley";
import Head from "next/head";
import { useState } from "react";
import grammar from "../foodFilterParser/foodFilter";


export default function Home() {
  const [value, setValue] = useState();
  const [status, setStatus] = useState(false);
  const [temp, setTemp] = useState();
  let result;

  useEffect(() => {
    axios.get(`http://localhost:3001/cars`).then((res) => setTemp(res.data));
    // console.log(temp);
  }, []);

  const setClick = () => {
    console.log(value);
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    try {
      parser.feed(value);
      console.log(JSON.stringify(parser.results));
      alert(parser.results);
      result = parser.results;
      console.log(result);
    } catch (parseError) {
      console.log("Error at character " + parseError.message);
    }
  };
  return (
    <>
      <Head>
        <title>FoodFilter | Parser</title>
      </Head>
      <div className="flex min-h-full w-full justify-center p-8">
        <div className="m-10 flex flex-row justify-between">
          <div className="basis-1/12">
            <div className="w-screen rounded-lg border-2 bg-white shadow-lg text-center">
              <p className="pt-2 font-semibold text-2xl">
                Search for the required details
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
                    value={value}
                    className="m-4 w-[100%] border-2 border-black text-center"
                    type="text"
                  />
                  <button
                    onClick={() => {
                      setValue("");
                    }}
                  >
                    <XIcon className="h-6 w-6"></XIcon>
                  </button>
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
              {result != null && <p className="text-xl">{result[0]}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import nearley from "nearley";
import { useState } from "react";
import grammar from "../carparser";
export default function Home() {
  const [value, setValue] = useState();
  const setClick = () => {
    console.log(value);
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    try {
      parser.feed(value);
      console.log(JSON.stringify(parser.results));
    } catch (parseError) {
      console.log("Error at character " + parseError.message);
    }
  };
  return (
    <>
      <div className="p-4 text-center font-bold text-2xl items-center">Nearley Parser</div>
      <div className=" w-3\4 shadow-lg p-6 space-y-4 text-center">
        <div>
          Text Input:
          <input
            onChange={(e) =>
              setValue((prevValue) => (prevValue = e.target.value))
            }
            className="ml-2 w-[100] border-2 border-x border-black"
            type="text"
          />
        </div>

        <div className=" p-4">
          <button
            onClick={setClick}
            className="p-2 font-semibold border-b-2 border-x-2 rounded-lg"
          >
            Parse String
          </button>
        </div>
      </div>
    </>
  );
}

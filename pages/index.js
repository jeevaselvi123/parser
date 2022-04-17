import axios from "axios";
import nearley from "nearley";
import { useEffect, useState } from "react";
import grammar from "../carparser";

export default function Home() {
  const [value, setValue] = useState();
  const [status, setStatus] = useState(false);
  const [temp, setTemp] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/cars`).then((res) => setTemp(res.data));
    console.log(temp);
  }, []);

  const setClick = () => {
    console.log(value);
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    try {
      parser.feed(value);
      console.log(JSON.stringify(parser.results));
      alert(parser.results);
      temp.map((item) => {
        console.log(item.name);
        if (item.name === parser.results) {
          setStatus(true);
        }
      });
    } catch (parseError) {
      console.log("Error at character " + parseError.message);
    }
  };
  return (
    <>
      <div className="flex min-h-full w-full justify-center p-8">
        <div className="m-10 flex flex-row justify-between">
          <div className="basis-1/12">
            <div className="w-screen rounded-lg border-2 bg-white shadow-lg text-center">
              <p className="pt-2 font-semibold text-2xl">Nearley Car Parsing</p>
              <div className=" pt-6 pl-4">
                Search:
                <input
                  onChange={(e) =>
                    setValue((prevValue) => (prevValue = e.target.value))
                  }
                  id="inputField"
                  className="m-4 w-[50%] border-2 border-x border-black"
                  type="text"
                />
              </div>
              <div className="p-4">
                <button
                  onClick={setClick}
                  className="p-2 font-semibold border-b-2 border-x-2 rounded-lg"
                >
                  Parse String
                </button>
              </div>
              {status && <p className="text-xl">Parsed Successfully!!</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

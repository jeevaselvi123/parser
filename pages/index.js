import Head from "next/head";
import { useState } from "react";
import Autocomplete from "../components/Autocomplete";

export default function Home() {
  const [value, setValue] = useState();
  const [status, setStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <Head>
        <title>FoodFilter | Parser</title>
      </Head>
      <div className="flex min-h-full w-full justify-center p-8">
        <div className="flex">
          <Autocomplete></Autocomplete>
        </div>
      </div>
    </>
  );
}

import { SunIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 bg-[#eaa03f] p-4 text-xs text-white md:flex-row md:justify-center">
      <div className="flex flex-row">
        <SunIcon className="h-5 w-5"></SunIcon>
        <p className=" text-base font-bold">&nbsp; Life is what you bake it !! &nbsp;</p>
        <SunIcon className="h-5 w-5"></SunIcon>
      </div>
    </footer>
  );
}

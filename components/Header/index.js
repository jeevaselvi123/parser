import { ClipboardListIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 bg-[#eaa03f] p-4 text-xs text-white md:flex-row md:justify-center">
      <div className=" flex flex-row">
        <ClipboardListIcon className="h-8 w-8"></ClipboardListIcon>
        <p className="text-2xl font-bold">Food Filter</p>
      </div>
    </header>
  );
}

import Link from "next/link";
import { DarkModeSwitch } from "./darkmode-switch";
import Laabratory from "./laabratory";

export default function Navbar({ currentPost, posts, style }) {
  return (
    <div style={{ ...style }} className="w-full flex flex-row font-medium">
      <div className="p-4 border-r-2 border-b-2 gap-4 flex flex-row justify-between items-center flex-shrink bg-gray-100 dark:bg-gray-900">
        <Link className="font-bold text-xl dark:bg-inherit" href="/">
          <Laabratory link={false} />
        </Link>
        <DarkModeSwitch className="bg-inherit dark:bg-inherit" />
      </div>
      <div className="flex-grow y-4 px-2 border-b-2 overflow-hidden whitespace-nowrap items-center justify-center"></div>
    </div>
  );
}

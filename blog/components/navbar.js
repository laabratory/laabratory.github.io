import { DarkModeSwitch } from "./darkmode-switch";

export default function Navbar({
  posts,
  previous,
  next,
  style
}) {
    return <div style={{ ...style }} className="full grid grid-cols-5 font-medium">
        <div className="p-4 border-2 flex flex-row justify-between items-center">
          <div>Aagam</div>
          <DarkModeSwitch/>
        </div>
        <div className="col-span-4 p-4 border-y-2 border-r-2 flex items-center justify-center">
          hello
        </div>
    </div>
}
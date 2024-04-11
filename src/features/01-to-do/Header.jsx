import ToggleDarkModeButton from "../07-dark-mode/ToggleDarkMode";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className="h-14 bg-custom-bgFooter border-b-custom-bgFooter shadow-3xl  flex flex-row items-center justify-between  mx-auto px-6 py-2 mb-4">
      <div className="flex flex-row items-center gap-1 text-custom-textFooterHeader font-semibold  ">
        <IoCheckmarkCircleOutline size="24px" />
        <p className="text-custom-textFooterHeader ">ToDo </p>
      </div>

      <ToggleDarkModeButton />
    </nav>
  );
}

export default Header;
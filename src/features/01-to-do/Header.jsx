import ToggleDarkModeButton from "../07-dark-mode/ToggleDarkMode";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className="h-14 bg-custom-bgFooter border-b-custom-bgFooter shadow-3xl  flex flex-row items-center justify-between px-6 py-2 mb-4 sticky z-50 top-0">
      <div className="flex flex-row items-center gap-1 text-custom-textFooterHeader font-semibold  ">
        <IoCheckmarkCircleOutline
          size="24px"
          color="text-custom-textFooterHeader"
        />
        <p className="text-custom-textFooterHeader ">ToDoApp </p>
      </div>

      <ToggleDarkModeButton />
    </nav>
  );
}

export default Header;

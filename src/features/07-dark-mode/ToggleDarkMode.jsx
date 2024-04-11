import { useDarkMode } from "./DarkModeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ToggleDarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="text-custom-baseTextColor border-custom-bgColor rounded-[5px] p-1 hover:font-bold  "
    >
      {isDarkMode ? (
        <IoSunnyOutline
          size="20px"
          className="custom-icon-sun hover:font-bold "
        />
      ) : (
        <IoMoonOutline
          size="20px"
          className="custom-icon-moon hover:font-bold"
        />
      )}
    </button>
  );
};

export default ToggleDarkModeButton;

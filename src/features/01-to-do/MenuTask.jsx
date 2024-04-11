import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTask, toggleEdit } from "./toDoSlice";
import { useDarkMode } from "../07-dark-mode/DarkModeContext";
import toast from "react-hot-toast";

function MenuTask({ task }) {
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();

  function handleDeleteTask(id) {
    dispatch(deleteTask(id));
    toast.success("Task deleted 🗑️");
  }
  function handleToggleEdit(id) {
    dispatch(toggleEdit(id));
  }

  const { Button } = chakraTheme.components;

  const theme = extendBaseTheme({
    config: {
      initialColorMode: "light", // or "dark" if you want dark mode as initial
    },
    semanticTokens: {
      colors: {
        background: {
          pressed: {
            base: { default: "pink", _dark: "blue.300" },
            subtle: { default: "blue.300", _dark: "blue.700" },
          },
        },
      },
    },
    components: {
      Button,
    },
  });

  return (
    <ChakraBaseProvider theme={theme}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HiEllipsisVertical size="25px" />}
          variant="outline"
          rounded="8px"
          borderColor={isDarkMode ? "#555" : "#fff"}
          color={isDarkMode ? "#ddd" : "#F37260"}
          _hover={isDarkMode ? { bg: "#222" } : { bg: "#FFF2EE" }}
          _expanded={isDarkMode ? { bg: "#222" } : { bg: "#FFF2EE" }}
          _focus="outline"
        />
        <MenuList
          background={isDarkMode ? "#444" : "#FFF2EE"}
          zIndex="9999"
          rounded="8px"
          mr="2px"
        >
          <MenuItem
            rounded="8px"
            padding="1"
            // margin="1"
            color={isDarkMode ? "#aaa" : "#222"}
            icon={<GrEdit />}
            background={isDarkMode ? "#444" : "#FFF2EE"}
            _hover={isDarkMode ? { bg: "#222" } : { bg: "#ebada5" }}
            onClick={() => handleToggleEdit(task.id)}
            value="Edit"
          >
            Edit
          </MenuItem>

          <MenuItem
            rounded="8px"
            padding="1"
            // margin="1"
            background={isDarkMode ? "#444" : "#FFF2EE"}
            color={isDarkMode ? "#aaa" : "#222"}
            _hover={isDarkMode ? { bg: "#222" } : { bg: "#ebada5" }}
            icon={<RiDeleteBinLine />}
            onClick={() => handleDeleteTask(task.id)}
            value="Delete"
          >
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </ChakraBaseProvider>
  );
}

export default MenuTask;

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  ChakraProvider,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteAllTasks } from "../01-to-do/toDoSlice";
import toast from "react-hot-toast";
import { useDarkMode } from "../07-dark-mode/DarkModeContext";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    modal: {
      100: "##555555eb",
      200: "#dad5d5",
      300: "#333",
      700: "#8ca798",
      800: "#9cbca8",
      900: "#1c315a",
      910: "#22435c",
    },
  },
});

function AlertDialogExample({ sortBy, setSortBy, tasks }) {
  const { isDarkMode } = useDarkMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const dispatch = useDispatch();

  function handleResetList() {
    dispatch(deleteAllTasks());
    toast.success("Tasks deleted successfully");
    setSortBy("All tasks");
  }

  return (
    <ChakraProvider theme={theme}>
      <Button
        color={isDarkMode ? "modal.200" : "modal.100"}
        _hover={{
          color: isDarkMode ? "modal.200" : "modal.100",
          bg: isDarkMode ? "modal.910" : "modal.700",
        }}
        bg={isDarkMode ? "modal.900" : "modal.800"}
        onClick={onOpen}
        px="1rem" // Add horizontal padding
        py="1.5px" // Add vertical padding
        fontSize="16px"
        size="sm"
        boxShadow="md"
      >
        Delete all Tasks
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            color={isDarkMode ? "white" : ""}
            bg={isDarkMode ? "modal.300" : "modal.200"}
            mx="3rem"
          >
            <AlertDialogHeader fontSize="md" fontWeight="bold">
              Delete all Tasks
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} size="sm">
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={handleResetList}
                ml={3}
                size="sm"
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ChakraProvider>
  );
}

export default AlertDialogExample;

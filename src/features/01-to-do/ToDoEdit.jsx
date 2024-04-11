import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "./toDoSlice";
import { IoSaveOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { closeEdit, toggleEdit } from "./toDoSlice";
import toast from "react-hot-toast";
import { useDarkMode } from "../07-dark-mode/DarkModeContext";

function ToDoEdit({ task, sortedTasks }) {
  const [updatedTask, setUpdatedTask] = useState(task.taskName);
  const { isDarkMode } = useDarkMode();

  // toast({
  //   style: {
  //     background: isDarkMode ? "#3f3f3f" : "#dad5d5",
  //   },
  // });

  const dispatch = useDispatch();

  function handleToggleEdit(id) {
    dispatch(toggleEdit(id));
  }

  function handleEdit(e) {
    e.preventDefault();

    if (!updatedTask) return;

    dispatch(editTask(updatedTask, task.id));

    setUpdatedTask("");
    toast.success("The task is updated.");
  }

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(closeEdit());
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      <form
        ref={ref}
        onSubmit={handleEdit}
        className={`bg-[#FFF] border border-[#fff] rounded-[8px] flex flex-row items-center gap-4 px-1 justify-between py-4 bg-custom-bgInput mr-3 ${
          task.index === sortedTasks.length - 1
            ? ""
            : "border-b border-[#e5e7eb]"
        }`}
      >
        <input
          className=" focus:outline pl-5 focus:pointer-events-auto focus:outline-focusRing text-custom-baseTextColor bg-custom-bgInput  border-none focus:outline-none rounded-[6px] focus:ring ring-focusRing  w-full "
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        ></input>
        <div className="flex text-custom-baseTextColor  flex-row items-center justify-center gap-0">
          <div className="focus:outline-none  focus:ring  bg-custom-bgButton hover:bg-custom-bgButtonHover py-[2.1px] px-2 text-custom-baseTextColor mr-3 rounded-[8px] gap-1 flex items-center  drop-shadow-md">
            <IoSaveOutline />
            <button className="" type="submit">
              Save
            </button>
          </div>
          <div className=" focus:outline-none  focus:ring   bg-custom-bgButton hover:bg-custom-bgButtonHover  py-[2.1px] px-2 text-custom-baseTextColor mr-3 rounded-[8px] gap-1 flex items-center  drop-shadow-md">
            <IoIosArrowRoundBack />
            <button onClick={() => handleToggleEdit(task.id)}>Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ToDoEdit;

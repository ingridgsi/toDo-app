import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./toDoSlice";

function ToDoInput() {
  const [task, setTask] = useState("");

  // const { id, taskName, completed } = useSelector((store) => store.toDo);

  const dispatch = useDispatch();

  function handleAddTask(e) {
    e.preventDefault();
    if (!task) return;

    dispatch(addTask(task));

    setTask("");
  }

  return (
    <>
      <div className="container mx-auto p">
        <form className="" onSubmit={handleAddTask}>
          <input
            className="hover:drop-shadow-md text-custom-baseTextColor bg-custom-bgInput shadow-3xl border-dotted border-[#fff] focus:outline-none rounded-[6px] focus:ring ring-focusRing focus:outline-focusRing  px-2 py-2 w-full"
            placeholder="+ Add task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          {/* <button type="submit"></button> */}
        </form>
      </div>

      {/* ) : (
        // <div>
        //   <button
        //     className="border rounded-full shadow-md px-5 py-3"
        //     onClick={() => setIsOpen((isOpen) => !isOpen)}
        //   >
        //     +
        //   </button>
        // </div>
      */}
    </>
  );
}

export default ToDoInput;

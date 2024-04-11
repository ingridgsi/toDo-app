import { useDispatch } from "react-redux";
import { completeTask } from "./toDoSlice";
import ToDoEdit from "./ToDoEdit";
import MenuTask from "./MenuTask";
import { useDarkMode } from "../07-dark-mode/DarkModeContext";

function ToDoList({ sortedTasks, sortBy, tasks }) {
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();

  function handleCompleteTask(id) {
    dispatch(completeTask(id));
  }

  if (sortBy === "All tasks") sortedTasks = tasks;

  if (tasks.length > 0 && sortBy === "Pending")
    sortedTasks = tasks.filter((task) => !task.completed);

  if (tasks.length > 0 && sortBy === "Completed")
    sortedTasks = tasks.filter((task) => task.completed);

  if (sortBy === "Completed" && !sortedTasks.length)
    return (
      <div className=" text-custom-baseTextColor drop-shadow flex items-center justify-center border-none rounded-[5px] overflow-y-auto  px-7 pb-20 pt-8 text-2xl h-auto ">
        <p>You haven&apos;t completed any task yet.</p>
      </div>
    );

  if (sortBy === "Pending" && !sortedTasks.length)
    return (
      <div className="text-custom-baseTextColor drop-shadow flex items-center justify-center border-none rounded-[5px] overflow-y-auto px-7 pb-20 pt-8 h-auto text-2xl">
        <p className="text-light-baseTextColor text-center">
          You have any task pending.
        </p>
      </div>
    );

  return (
    <>
      {!sortedTasks.length ? (
        <div className="text-custom-baseTextColor text-center drop-shadow flex items-center justify-center border-none rounded-[5px] overflow-y-auto px-7 pb-20 pt-8 h-auto text-2xl">
          <p>Start adding your tasks!</p>
        </div>
      ) : (
        <div className=" flex flex-col gap-[0.5rem] drop-shadow border-none rounded-[5px] overflow-y-auto pb-5  h-auto ">
          {sortedTasks?.map((task) =>
            task.isEditing ? (
              <ToDoEdit key={task.id} task={task} sortedTasks={sortedTasks} />
            ) : (
              <>
                <ul
                  className="rounded-[8px] flex flex-row items-center gap-4 justify-between px-4  bg-custom-bgInput mr-3"
                  // className={`flex flex-row items-center gap-4 justify-between ${
                  //   index === sortedTasks.length - 1
                  //     ? ""
                  //     : "border-b border-[#e5e7eb]"
                  // }`}
                >
                  <li
                    key={task.id}
                    className="flex items-center gap-4 py-4 text-custom-baseTextColor "
                  >
                    <div className=" relative flex flex-row gap-2 justify-center">
                      <input
                        className={`peer appearance-none w-6 h-6 rounded-full border-2 mt-1
                        checked:bg-custom-bgInput ${
                          isDarkMode ? "border-[#ddd] " : "border-[#F37260] "
                        }  `}
                        onChange={() => handleCompleteTask(task.id)}
                        type="checkbox"
                        checked={task.completed}
                      />

                      <svg
                        className="absolute w-6 h-6  hidden peer-checked:block pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 15"
                        fill="none"
                        stroke="#8CA87C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span
                      className={`text-headerColor ${
                        task.completed
                          ? "line-through text-custom-baseTextColor text-center"
                          : ""
                      }`}
                    >
                      {task.taskName}
                    </span>
                  </li>
                  <MenuTask task={task} />
                </ul>
              </>
            )
          )}
        </div>
      )}

      {/* {!sortedTasks.length ? (
        <div className="flex items-center justify-center border rounded-[5px] overflow-y-auto px-7 py-5 h-[20rem] mb-5">
          <p>Start adding your tasks!</p>
        </div>
      ) : ( */}

      {/* )} */}
    </>
  );
}

export default ToDoList;

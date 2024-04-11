import DeleteAllTasks from "../01-to-do/DeleteAllTasks";

function Filter({ sortBy, setSortBy, tasks }) {
  return (
    <>
      <div className="container mx-auto pt-2 pb-2 mb-2 mt-2 font-medium">
        {tasks.length > 0 ? (
          <div className="flex flex-row items-center gap-1  justify-start ">
            <select
              className=" drop-shadow-md border-none focus:outline-none  rounded-[6px] focus:ring bg-custom-bgButton hover:bg-custom-bgButtonHover py-1 px-3   ring-focusRing focus:outline-focusRing hover:drop-shadow-xl focus:shadow-sm  text-custom-baseTextColor "
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option selected>All Tasks</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>

            {/* <button
              onClick={handleResetList}
              className="text-custom-baseTextColor bg-custom-bgButton drop-shadow-md border-none focus:outline-none  rounded-[6px] hover:bg-custom-bgButtonHover py-1 px-3   focus:ring ring-focusRing focus:outline-focusRing hover:drop-shadow-xl focus:shadow-sm "
            >
              Delete Tasks
            </button> */}
            <DeleteAllTasks
              sortBy={sortBy}
              setSortBy={setSortBy}
              tasks={tasks}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Filter;

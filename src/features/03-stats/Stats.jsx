import { useMemo } from "react";
import { useSelector } from "react-redux";
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function Stats() {
  const tasks = useSelector((store) => store.toDo.items || []);

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const totalTasks = memoizedTasks.length;

  const totalTasksDone = memoizedTasks.filter((task) => task.completed).length;

  const totalTasksNotCompleted = memoizedTasks.filter(
    (task) => task.completed === false
  ).length;

  let tasksDonePercent;
  if (totalTasks > 0) {
    tasksDonePercent = Math.round((totalTasksDone / totalTasks) * 100) + "%";
  } else {
    tasksDonePercent = "--";
  }

  const tasksToDoPercent =
    Math.round((totalTasksNotCompleted / totalTasks) * 100) + "%";

  const data = [
    {
      label: "All tasks",
      quantity: totalTasks,
    },
    {
      label: "To do",
      quantity: totalTasksNotCompleted,
    },
    {
      label: "Done",
      quantity: totalTasksDone,
    },
    {
      label: "Percent",
      quantity: tasksDonePercent,
    },
  ];

  // const data = [
  //   {
  //     labelStat: "Done",
  //     value: totalTasksDone,
  //     color: "#62724e",
  //     percent: tasksDonePercent,
  //   },

  // {
  //   labelStat: "To do",
  //   value: totalTasksNotCompleted,
  //   color: "#c2410c",
  //   percent: tasksToDoPercent,
  // },
  // ];

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // if (!totalTasks)
  //   return (
  //     <div className="bg-[#fff] flex items-center justify-center border rounded-[5px]  overflow-y-scroll px-7 py-5 h-auto mb-5">
  //       <p>Start adding your tasks!</p>
  //     </div>
  //   );

  // if (tasksDonePercent === 100)
  //   return (
  //     <div className="flex items-center justify-center border rounded-[5px] overflow-y-scroll px-7 py-5 h-[20rem] mb-5">
  //       <p>You are done for today! Great job 🎉</p>
  //     </div>
  //   );

  // if (totalTasks > 0)
  return (
    <>
      <div className="  grid grid-cols-2  gap-2 items-center ">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center hover:drop-shadow-md hover:cursor-pointer bg-custom-bgInput  drop-shadow-sm rounded-[6px] px-5 py-3 "
          >
            <p className="text-custom-baseTextColor font-semibold">
              {item.label}
            </p>
            <p className="text-custom-baseTextColor">{item.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stats;

{
  /* <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            nameKey="labelStat"
            dataKey="value"
            innerRadius={20}
            outerRadius={25}
            cx="50%"
            cy="50%"
            paddingAngle={3}
            label={({ percent, labelStat }) =>
              `${labelStat}: ${Math.round(percent)}%`
            }
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.value} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer> */
}

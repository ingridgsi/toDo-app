import { useState } from "react";
import ToDoInput from "../features/01-to-do/ToDoInput";
import ToDoList from "../features/01-to-do/ToDoList";
import Timer from "../features/02-timer/Timer";
import Stats from "../features/03-stats/Stats";
import Quotes from "../features/04-messages-api/Quotes";
import Filter from "../features/05-filter/Filter";
import Container from "../utils/Container";
import { useSelector } from "react-redux";
import Header from "./01-to-do/Header";
import Footer from "./06-footer/Footer";
import { useDarkMode } from "../features/07-dark-mode/DarkModeContext";

import { Toaster } from "react-hot-toast";

function Wrapper() {
  const [sortBy, setSortBy] = useState("All tasks");
  const { isDarkMode } = useDarkMode();

  const tasks = useSelector((store) => store.toDo.items);

  let sortedTasks = tasks;

  return (
    <>
      <div className="bg-custom-bgColor h-96">
        <div>
          <Header />
          <Container>
            <ToDoInput />
            <Filter sortBy={sortBy} setSortBy={setSortBy} tasks={tasks} />
            <div className="md:grid grid-cols-3 xl:grid-cols-4 gap-5 xl:text-base ">
              <div className="md:col-span-2 xl:col-span-3">
                <ToDoList
                  sortedTasks={sortedTasks}
                  sortBy={sortBy}
                  tasks={tasks}
                />
              </div>
              <div className="flex flex-col gap-4 justify-start mb-4  ">
                <Stats />
                <Timer />
                <Quotes />
              </div>
            </div>
          </Container>
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: isDarkMode ? "#3f3f3f" : "white",
              color: isDarkMode ? "white" : "",
            },
          }}
        />
      </div>
      <Footer />
    </>
  );
}

export default Wrapper;

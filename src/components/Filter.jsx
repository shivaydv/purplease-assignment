import React, { useContext } from "react";
import { TasksContext } from "../context/Tasks";

const Filter = () => {
  const { tasks, filteredList, setFilteredList } =
    useContext(TasksContext);

  // shows the remaining tasks in the list to complete
  const remainingTasks = () => {
    const newlist = tasks.filter((item) => item.isCompleted === false);
    return newlist.length;
  };


  return (
    <footer className=" flex-col items-center flex">
        <p className="self-start font-semibold">Active Tasks : {remainingTasks()}</p>


      <div className="w-full flex  font-semibold text-center ">
        <button
          onClick={() => setFilteredList("All")}
          className={`hover:bg-gray-100 w-1/3 p-2 ${filteredList === "All" && "active"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilteredList("Active")}
          className={`hover:bg-gray-100 w-1/3 p-2 ${filteredList === "Active" && "active"}`}
        >
          Active
        </button>

        <button
          onClick={() => setFilteredList("Completed")}
          className={`hover:bg-gray-100 w-1/3 p-2 ${filteredList === "Completed" && "active"}`}
        >
          Completed
        </button>


      </div>
    </footer>
  );
};

export default Filter;

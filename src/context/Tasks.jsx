import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const [tasks, setTasks] = useState(() => {
    const savedTodos = localStorage.getItem("to_do_list-tasks");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [filteredList, setFilteredList] = useState("All");

  const filterArray = () => {
    if (filteredList === "Active") {
      return tasks.filter((item) => item.isCompleted === false);
    } else if (filteredList === "Completed") {
      return tasks.filter((item) => item.isCompleted === true);
    } else {
      return tasks;
    }
  };

  useEffect(() => {
    localStorage.setItem("to_do_list-tasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, setFilteredList, filterArray, filteredList }}
    >
      {children}
    </TasksContext.Provider>
  );
};

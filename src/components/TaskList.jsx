import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TasksContext } from "../context/Tasks";

const TaskList = () => {
  const { tasks, setTasks, filterArray } = useContext(TasksContext);

  const handlecheckbox = (id) => {
    tasks.filter((item) => {
      item.id === id && (item.isCompleted = !item.isCompleted);
    });
    setTasks([...tasks]);
  };

  const deleteTask = (itemsId) => {
    const newlist = tasks.filter((item) => item.id !== itemsId);
    setTasks(newlist);
  };

  return (
    <div className="flex flex-col justify-start flex-grow py-3 md:px-10 overflow-y-auto  ">
      {filterArray().length > 0 ? (
        filterArray().map((item) => {
          return (
            <div
              className="flex justify-between w-full py-2 text-lg items-center"
              key={item.id}
            >
              <div className="flex gap-4 items-center ">
                <input
                  type="checkbox"
                  className="h-4 w-4  "
                  checked={item.isCompleted}
                  onChange={() => handlecheckbox(item.id)}
                />
                <p
                  className={
                    item.isCompleted === true
                      ? "line-through text-gray-500"
                      : ""
                  }
                >
                  {item.taskValue}
                </p>
              </div>

              <button className="" onClick={() => deleteTask(item.id)}>
                <MdDeleteOutline
                  size={26}
                  className="text-black/80 hover:text-red-500"
                />
              </button>
            </div>
          );
        })
      ) : (
        <p className="flex justify-center items-center pt-6">No Tasks Available</p>
      )}
    </div>
  );
};

export default TaskList;

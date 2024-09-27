import React, { useContext, useState } from "react";
import { TasksContext } from "../context/Tasks";

const TaskInput = () => {


  const { tasks, setTasks } = useContext(TasksContext);
  const [inputvalue, setInputvalue] = useState("");

  //runs add task function when enter key is pressed
  const handlepressedkey = (pressedkey) => {
    if (pressedkey === "Enter") addtask();
  };

    //add task to the list with a check on the input value length
  const addtask = () => {
    if (!inputvalue) {
      alert("Please Enter the Value");
    } else if (inputvalue.length > 50) {
      alert("Task Name Must be Less than 50");
    } else {
      setTasks([
        {
          taskValue: inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1),
          isCompleted: false,
          id: Date.now(),
        },
        ...tasks,
      ]);
      setInputvalue("");
    }
  };

return (
    <div className="w-full flex flex-col items-center mb-2">
        <div className="w-full flex mb-2">
            <input
                type="text"
                className="flex-grow py-2 px-4 border border-black/80 rounded-md"
                placeholder="Enter Your Task"
                value={inputvalue}
                onChange={(e) => setInputvalue(e.target.value)}
                onKeyDown={(e) => handlepressedkey(e.key)}
            />
            <button className="ml-2 bg-black/80 hover:bg-black/90 rounded-md text-white text-sm py-2 px-4" onClick={addtask}>
                Add
            </button>
        </div>

    </div>
);
};

export default TaskInput;

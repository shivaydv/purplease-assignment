import Filter from "./components/Filter";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-gradient-to-tr from-blue-300 to-pink-300 md:p-20 overflow-hidden w-screen h-screen">
    <div
      className={" h-full rounded-lg p-6 bg-white max-w-4xl mx-auto  flex-col flex justify-between shadow-xl "}
    >

      <h1 className="w-full flex justify-center font-semibold text-2xl mb-2">
        To Do List
      </h1>
      <TaskInput />
      <Filter />
      <TaskList />
      </div>
    </div>
  );
}

export default App;

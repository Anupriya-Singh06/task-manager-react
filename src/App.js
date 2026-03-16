import { useState } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import SearchBar from "./components/SearchBar";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [query, setQuery] = useState("");

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { text: text, completed: false }
    ]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>

      <h1>Task Manager 🚀</h1>

      <TaskInput addTask={addTask} />

      <SearchBar setQuery={setQuery} />

      <ProgressBar tasks={tasks} />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App;
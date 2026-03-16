import { useState } from "react";

function TaskInput({ addTask }) {

  const [text, setText] = useState("");

  const handleSubmit = () => {
    if(text.trim() === "") return;

    addTask(text);
    setText("");
  };

  return (
    <div>

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Enter task..."
      />

      <button onClick={handleSubmit}>Add</button>

    </div>
  );

}

export default TaskInput;
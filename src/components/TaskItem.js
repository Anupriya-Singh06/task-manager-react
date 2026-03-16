function TaskItem({ task, index, toggleTask, deleteTask }) {

  return (

    <li>

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.text}
      </span>

      <button onClick={()=>toggleTask(index)}>✔</button>

      <button onClick={()=>deleteTask(index)}>❌</button>

    </li>

  );

}

export default TaskItem;
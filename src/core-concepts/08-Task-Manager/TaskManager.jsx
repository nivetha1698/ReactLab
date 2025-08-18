import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
      const newTask = {id:Date.now(), text, completed: false};
      setTasks([...tasks, newTask])
    }

   const toggleTask = (id) => {
     setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
     ));
   };

   const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id));
   };

    
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-bold text-gray-800 text-center">Task Manager</h3>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
       <p className="text-gray-600 text-center">Tasks: {tasks.length}</p>
      </div>
    );
}
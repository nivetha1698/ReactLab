import { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskManager() {
    const [task, setTask] = useState([]);
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-bold text-gray-800 text-center">Task Manager</h3>
        <TaskForm />
       <p className="text-gray-600 text-center">Tasks: {task.length}</p>
      </div>
    );
}
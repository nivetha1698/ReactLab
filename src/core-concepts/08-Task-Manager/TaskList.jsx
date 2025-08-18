import { TrashIcon } from "@heroicons/react/24/solid"; // Using Heroicons

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-3 rounded shadow cursor-pointer transition-colors ${
            task.completed
              ? "bg-green-200 line-through text-gray-600"
              : "bg-orange-50 hover:bg-orange-100"
          }`}
        >
          <span
            onClick={() => toggleTask(task.id)}
            className="flex-1">
                
            {task.text}
          </span>

          <TrashIcon
            onClick={() => deleteTask(task.id)}
            className="h-5 w-5 text-red-300 hover:text-red-700 ml-3 cursor-pointer transition-colors"
          />
        </li>
      ))}
    </ul>
  );
}

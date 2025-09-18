import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 rounded-md shadow p-4 bg-gray-800">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-gray-700 text-left w-full text-white p-5 rounded break-all ${
              task.isCompleted ? "line-through text-gray-500 bg-gray-800" : ""
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className=" p-4 bg-gray-500 text-white rounded-md shadow hover:bg-gray-400 transition"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            className=" p-4 bg-red-400 hover:bg-red-500 rounded-md shadow transition"
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

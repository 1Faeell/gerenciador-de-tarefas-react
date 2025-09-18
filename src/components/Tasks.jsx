import { Plus, Trash2Icon } from "lucide-react";
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
    <ul className="space-y-4 rounded-md rounded-t-none shadow p-4 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-800">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <div className="flex flex-row w-full">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-gray-600 text-left w-full text-white p-5 rounded-md rounded-r-none break-all hover:opacity-80 ${
                task.isCompleted &&
                "line-through text-gray-400 bg-opacity-20 hover:opacity-80 bg-none"
              }`}
            >
              {task.title}
            </button>

            <Button
              onClick={() => onSeeDetailsClick(task)}
              className="p-4 bg-gray-400 text-white rounded-md rounded-l-none shadow hover:opacity-90 transition "
            >
              <Plus />
            </Button>
          </div>
          <Button
            className=" p-4 bg-red-400 hover:bg-red-500 rounded-md  shadow transition"
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

import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-gray-900 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center align-middle relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bg-gray-700 text-white p-4 rounded-md"
          >
            <ChevronLeftIcon />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="p-6 bg-gray-700 rounded-md shadow space-y-4">
          <h2 className="text-white text-xl font-bold text-center shadow-xl p-4 rounded-md">
            {title}
          </h2>
          <p className=" bg-gray-600 text-gray-200 rounded-md p-4 shadow-inner">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-gray-900 p-6 flex justify-center items-center min-w-full">
      <div className="w-[500px] space-y-4 ">
        <div className="flex justify-center align-middle relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 text-white bg-gray-700 hover:opacity-80 transition p-4 rounded"
          >
            <ChevronLeftIcon />
          </button>

          <Title className="text-3xl text-slate-100 font-bold text-center rounded-md shadow-xl p-0 mx-[4rem]">
            Detalhes da Tarefa
          </Title>
        </div>
        <div className="p-6 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-800 rounded shadow space-y-4">
          <h2 className="text-white text-xl font-bold text-center shadow-xl p-4 rounded break-words">
            {title}
          </h2>
          <p className=" bg-gray-600 text-gray-200 rounded p-4 shadow-inner break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

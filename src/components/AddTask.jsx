import { useState } from "react";
import Input from "./Input";
// import Title from "./Title";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 shadow w-full rounded">
      {/* <Title>Gerenciador de Tarefas</Title> */}

      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        rows={3}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border text-black border-none rounded py-2 px-4 resize-none"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="w-full p-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-400 transition font-bold"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;

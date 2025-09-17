import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-gray-700 rounded-md shadow">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        rows={3}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="w-full p-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-400 transition"
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

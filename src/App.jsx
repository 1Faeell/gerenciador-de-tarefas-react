import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // SE QUISER CHAMAR API COM 10 TAREFAS DEFINIDAS, DESCOMENTE ESSE CÓDIGO
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       { method: "GET" }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   };
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen flex justify-center p-6 bg-gray-900 text-white">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";

// function Contador() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Contagem: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Incrementar (+)</button>
//       <button onClick={() => setCount(count - 1)}>Decrementar (-)</button>
//     </div>
//   );
// }

// function Saudacao() {
//   const [novoNome, setNovoNome] = useState("Visitante");
//   const [novaIdade, setNovaIdade] = useState("Indefinida");

//   return (
//     <>
//       <h1>Olá, {novoNome}!</h1>
//       <h2>Sua idade é: {novaIdade}</h2>
//       <div className="container-inputs">
//         <input placeholder="Digite seu nome" className="input-nome" />
//         <br />
//         <input placeholder="Digite sua idade" className="input-idade" />
//         <button
//           className="btn-atualizar"
//           onClick={() => {
//             const nomeInput = document.querySelector(".input-nome");
//             const idadeInput = document.querySelector(".input-idade");

//             setNovoNome(nomeInput.value);
//             setNovaIdade(idadeInput.value);

//             nomeInput.value === "" ? setNovoNome("Visitante") : null;
//             idadeInput.value === "" ? setNovaIdade("Indefinida") : null;
//           }}
//         >
//           Atualizar
//         </button>
//       </div>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Contador />
//       <Saudacao />
//     </div>
//   );
// }

// export default App;

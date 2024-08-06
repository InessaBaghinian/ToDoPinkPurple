import { useState } from "react";
export default function ({ onAdd }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.length > 0) {
      onAdd({ task, done: false });
      setTask("");
    }
  };

  return (
    <div className="flex items-center">
      <input
        className="flex-1 border-2 rounded-md border-pink-500 p-2 text-pink-500 font-black" type="text" placeholder="What we have for today?"
        value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button type="button" className="border-2 rounded-md border-white-500 text-white bg-pink-500 w-1/2 h-full text-2xl flex items-center justify-center material-symbols-outlined font-bold hover:scale-125 transition"
        onClick={handleAdd}> Add </button>
    </div>
  );
}

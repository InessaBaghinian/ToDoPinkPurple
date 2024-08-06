import TaskButton from "./TaskButton";
export default function ({ task, done, onComplete, onRemove }) {
  const defaultClasses =
    "bg-purple-100 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:bg-slate-100 transition text-pink-500";
  const doneClasses =
    "flex justify-between items-center p-3 gap-2 rounded bg-purple-500 text-white";

  const completeTask = () => {
    onComplete(task.id);
  };

  const removeTask = () => {
    onRemove(task.id);
  };

  return (
    <div className={!done ? defaultClasses : doneClasses}>
      <span className="flex-1">{task.task}</span>
      {!done && (
        <div className="group-hover:opacity-100 flex gap-2 transition-opacity">
          <TaskButton type="done" onClick={completeTask} />
          <TaskButton onClick={removeTask} />
        </div>
      )}
      {done && (
        <div className="bg-pink-100 text-center rounded-full text-purple-500  justify-center  p-1">
          <span className="text-pink-500 font-bold material-symbols-outlined">done</span>
          <TaskButton onClick={removeTask}/>
        </div>
        
      )}
    </div>
  );
}

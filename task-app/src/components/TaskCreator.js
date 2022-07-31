import { useState } from 'react';

const TaskCreator = ({createNewTask}) => {
  
  const [ taskName, setTaskName ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto del formulario
    createNewTask(taskName)
    setTaskName('')  // restablecemos el valor del input
  }

  return (
      <form className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter a new task"
          className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none"
          value={taskName} // damos un valor vacio al input
          onChange={(e)=> setTaskName(e.target.value)} 
        />
        <span className="relative top-0 right-0 block">
          <button className="inline-flex items-center w-32 h-12 px-6 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">Save Task</button>
        </span>
      </form>
  )
}

export default TaskCreator
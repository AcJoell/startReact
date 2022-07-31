import { useState } from 'react';

const TaskCreator = ({createNewTask}) => {
  
  const [ taskName, setTaskName ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto del formulario
    createNewTask(taskName)
    setTaskName('')  // restablecemos el valor del input
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a new task"
        value={taskName} // damos un valor vacio al input
        onChange={(e)=> setTaskName(e.target.value)} 
      />        
      <button>Save Task</button>
    </form>
  )
}

export default TaskCreator
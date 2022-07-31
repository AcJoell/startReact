import TaskRow from "./TaskRow"

const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {
  
  const taskTableRow = (doneValue) => {
    return(

      tasks
      .filter(t => t.done === doneValue)
      .map(task => 
        <TaskRow 
          task={task} 
          key={task.name}
          toggleTask={toggleTask}
        />
      )
    )
  }
  
  
  return (
    <div className="w-full items-center max-w-md mx-auto mt-12 overflow-hidden text-center">        
      <div className="overflow-x-auto relative">

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">Tasks</th>
              <th scope="col" className="py-3 px-6">Check</th>
            </tr>
          </thead>
          <tbody>
            {
              taskTableRow(showCompleted)  
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default TaskTable
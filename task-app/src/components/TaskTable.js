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
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRow(showCompleted)  
        }
      </tbody>
    </table>
  )
}

export default TaskTable
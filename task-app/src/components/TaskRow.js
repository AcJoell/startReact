const TaskRow = ({task, toggleTask}) => {
  return (
    <tr key={task.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {task.name}
      </th>
      <td className="py-4 px-6">
        <input 
          type="checkbox" 
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}

export default TaskRow
import { useEffect, useState } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';

function App() {

  const [tasks, setTasks] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask (task) {
    if(!tasks.find(oneTask => oneTask.name === task)){
      setTasks([...tasks, {name: task, done: false}])
    }
  }

  const toggleTask = task => {
      setTasks(
        tasks.map((t) => (t.name === task.name) ? {...t, done: !t.done} : t) // eslint-disable-line
      )
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks') // obtenemos las tareas existentes del localstorage
    if (data) {
      setTasks(JSON.parse(data)) // lo convertimos a su formato de JS con JSON.parse y lo guardamos en setTasks
      console.log(tasks)
    }
  },[]) // eslint-disable-line

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)) // JSON.stringify sirve para convertir un objeto a string para poder almacenarlo en el localstorage
  }, [tasks])

  const cleanTask = () => {
    setTasks(tasks.filter(task => !task.done))
    setShowCompleted(false)
  }


  return (
    <div className="App "> 
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable tasks={tasks} toggleTask={toggleTask} />
      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTask={cleanTask}
      />

      {
        showCompleted === true && (
          <TaskTable tasks={tasks} toggleTask={toggleTask} showCompleted={showCompleted}/>
         )
      }

    </div>
  );
}

export default App;
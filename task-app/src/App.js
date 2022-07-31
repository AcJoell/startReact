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
    <div className="App w-full h-full px-3 antialiased bg-indigo-600 lg:px-6">
      <nav className="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
        <div class="mt-10 justify-center w-full h-24 mx-auto font-medium md:justify-center">
            <span class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                <span class="p-1 text-xl font-black leading-none text-white select-none"><span class="text-indigo-300">Ac</span><span>Joell</span></span>
            </span>
        </div>
      </nav>
      <div className="container mx-auto text-center sm:px-4">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Task App</span></h1>
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
    </div>
  );
}

export default App;
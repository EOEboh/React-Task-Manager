import './index.css';
import Header  from './components/Header';
import AddForm from './components/AddForm';
import Tasks from './components/Tasks';
import About from './components/About';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'



function App() {
// tasks = name of array (state)
// setTasks = function to update the state

// state for toggling addform
  const [showAddTask, setShowAddTask] = useState(false);

  const [ tasks, setTasks] = useState([])


  
  useEffect( () => {
    const getTasks = async () => {
      const taskGottenFromServer = await fetchTasks()
      setTasks(taskGottenFromServer)
    }


    getTasks()
  }, [])


  // fetch tasks from backend
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }
  
// add function to add new task to the state

const AddTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
    
}

//delete function
 const deleteTask = async (id) => {
   await fetch(`http://localhost:5000/tasks/${id}`, {
     method: 'DELETE'
   })

  //  deletes from UI
   setTasks( tasks.filter( (task) => task.id !== id))
 }



// fetching a single task to toggle   
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = res.json()

  return data
}
    




// toggleReminder function 
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {
    ...taskToToggle, reminder: !taskToToggle.reminder 
  }


  const res = await fetch(`http://localhost:5000/tasks/${id}`, 
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updTask)
  }
  ,
  )
  const data = await res.json()

  setTasks(
    tasks.map((task)=> 
      task.id === id ? {...task, reminder: data.reminder} : task
    )
  )
}

                                    

  return (
     
    <div className="container">
      <Header showForm={ () => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddForm onAdd={AddTask}/>}
        
      {/* passing down props to Tasks*/}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks available' }
      
      
    <Routes> <Route path='/' exact  render={ (props) => (
      <>
      </>
    )} /> </Routes>
    
<Routes><Route path='/about' element={<About />}/></Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
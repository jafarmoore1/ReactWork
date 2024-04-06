import Header from './components/Header'
import Tasks from './components/Tasks';
import Addtask from "./components/Addtask";
import { useState } from "react"

function App() {

  //delete a task

  //add a task

  const [showAddTask , setShowAddTask]= useState(false)

  const [tasks,setTasks] = useState(
    [
      {
          id:1,
          words:"Dermatalogist at 5am",
          time:'feb 24th',
      },
  
      {
          id:2,
          words:"doctor at 8am",
          time:'feb 14th',
      },
  
      {
          id:3,
          words:"dentist at 4pm",
          time:'feb 28th',
      },

      {
        id:4,
        words:"School at 8am",
        time:'March 1st',
    },
  ]
  );

  //add ask
   const addTask = (task) => {

    console.log(task)

     const id = Math.floor(Math.random() * 10000)+1;

     const newTask = { id, ...task }

     setTasks([ ...tasks ,newTask]);

     console.log(newTask);
   }

  const deltask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('WE INSIDE')
  }

  return (
    <div className="Container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title='Personalized List.....'/>
      {showAddTask && <Addtask  onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deltask} /> ):( 'NO TASKS TO SHOW AT THE MOMENT')}
    </div>
  );
}


export default App;



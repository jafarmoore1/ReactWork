import { useState } from "react"

const Addtask = ({onAdd}) => {

  // making it so i can change the values
  const [words,setWords] = useState('')

  const [time,setTime] = useState('')

  const [reminder,setReminder] = useState(false)

  const onSubmit =(e)=>{
    e.preventDefault();

    if(!words){
      alert("please add a task");
      return
    }
    onAdd({ words ,time, reminder});
    setWords('');
    setTime('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>

        {/* tasks */}
        <div className="form-control" >
            <label>Task</label>

            <input type="text" placeholder="Add Task" value={words}  onChange={(e)=>setWords(e.target.value)}/>
            
        </div>

        {/* Date */}
        <div className="form-control">
            <label>Date</label>

            <input type="text" placeholder="Add date" value={time} onChange={(e)=> setTime(e.target.value)}/>
            
        </div>

        {/* reminder */}
        <div className="form-control">
            <label>Set reminder</label>

            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            
        </div>

        <input type="submit" value="save task" className="btn"/>
    </form>
  )
}

export default Addtask


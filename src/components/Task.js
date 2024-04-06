// import Button from "./Button"

// const Task = (props) => {
//     return(
//         <div className="task">
//             <p>
//             <h3 style={{ marginRight: 'auto' , marginTop: '20px'}}>{props.task.words}</h3>
//             <h3>{props.task.time}</h3>
//             </p>
//             <Button style={{color : 'red' , marginRight: 'auto'}} text='delete'/>
//         </div>
//     )
// }
// export default Task

import Button from "./Button";

const Task = ({task, onDelete}) => {

    return (
        <div className="task" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 'auto', marginTop: '20px' }}>
                <h3>{task.words}</h3>
                <h3>{task.time}</h3>
            </div>
             <Button style={{ color: 'red' }} text='delete' onClick={()=>onDelete(task.id)}/> 
        </div>
    );
}

export default Task

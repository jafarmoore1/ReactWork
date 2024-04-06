import Task from "./Task"

const Tasks = ({tasks , onDelete}) => {
    return(
        <div>
            {/* {tasks.map((task)=> (<h3 key={task.id}>{task.words}</h3>))} */}

            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete}/>) )}
        </div>
    )
}

export default Tasks
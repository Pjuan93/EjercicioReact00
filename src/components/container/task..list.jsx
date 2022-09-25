import React from 'react'
// import { LEVEL } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Juan', 'Perez', true,'juanperez@gmail.com');

    // const changeState = (id) =>{
    //     console.log("todo: cambiar estado de una tarea")
    // }


    return (
    <div>
        <div>
            <h1>Formulario de usuario</h1>
        </div>
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
    )
}

export default TaskListComponent;

import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

function TaskComponent({task}) {
  return (
    <div>
        <h4>
            Nombre: {task.name}
        </h4>
        <h4>
            Apellido: {task.surname}
        </h4>
        <h4>
            Email: {task.email}
        </h4>
        <h6>
            Conectado: {task.connected ? 'Connected' : 'Not Connected'}
        </h6>
        
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

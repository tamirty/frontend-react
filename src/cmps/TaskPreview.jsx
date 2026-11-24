import { Link } from 'react-router-dom'

export function TaskPreview({ task }) {
  return (
    <Link to={`/task/${task._id}`}>
      <article className="task-preview flex flex-column align-center">
        <h1 className="task-title">{task.title}</h1>
        <div className="assigned-members">Assigned: ${task.assignedMembers}</div>
        <div className={task.isComplete ? 'green' : 'red'}>
          {task.isComplete ? '✔️' : '❌'}
        </div>
      </article>
    </Link>
  )
}
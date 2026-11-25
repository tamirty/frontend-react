import { Link } from 'react-router-dom'

export function TaskPreview({ task }) {
  return (
    <Link to={`/task/${task.id}`}
      className="task-link">

      <article className="task-preview">

        <h4 className="task-title">
          {task.title}
        </h4>

        <div className="task-footer">

          {task.description && (
            <span className="description-icon">☰</span>
          )}

          {task.assignedMembers?.length > 0 && (
            <span className="assigned-members">
              {task.assignedMembers.length} members
            </span>
          )}

          {task.isComplete && (
            <span className="task-complete">✔</span>
          )}

        </div>
      </article>
    </Link>
  )
}
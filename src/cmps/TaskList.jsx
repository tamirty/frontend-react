import { Link } from 'react-router-dom'
import { TaskPreview } from './TaskPreview'

export function TaskList({ tasks }) {
    return (
        <section className="task-list">
            {!tasks.length ? (
                <h1 style={{ alignSelf: 'center' }}>It's empty here...</h1>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <div className="task-preview">
                                <TaskPreview task={task} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
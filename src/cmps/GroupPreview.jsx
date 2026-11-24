import '../assets/styles/cmps/board/BoardGroup.css'
import '../assets/styles/cmps/board/TaskPreview.css'
import { TaskList } from './TaskList'

export function GroupPreview({ group }) {
    return (
        <article className="group-preview">
            <h3>{group.title}</h3>
                <TaskList tasks={group.tasks}/>
            <button className="add-task-btn">
                + Add a card
            </button>
        </article>
    )
}
import { TaskList } from './TaskList'
import '../assets/styles/cmps/board/BoardGroup.css'
import '../assets/styles/cmps/board/TaskPreview.css'

export function GroupPreview({ group }) {
    return (
        <article className="group-preview">
            <header className="group-header">
                <h3>{group.title}</h3>
                {/* <button className="group-menu-btn">⋯</button> */}
            </header>

            <TaskList tasks={group.tasks} />

            <button className="add-task-btn">
                + Add a card
            </button>

        </article>
    )
}
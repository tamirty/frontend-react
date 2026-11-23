import '../assets/styles/cmps/board/BoardGroup.css'
import '../assets/styles/cmps/board/TaskPreview.css'


export function GroupPreview({ group }) {
    return (
        <article className="group-preview">
            <h3>{group.title}</h3>

            <div className="task-list">
                {(group.tasks || []).map(task => (
                    <div className="task-preview" key={task.id}>
                        {task.title}
                    </div>
                ))}
            </div>

            <button className="add-task-btn">
                + Add a card
            </button>
        </article>
    )
}
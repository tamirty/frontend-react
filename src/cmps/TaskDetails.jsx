import '../assets/styles/cmps/board/TaskDetails.css'



export function TaskDetails({ task }) {
    return (
        <section className="task-description">
            <h3>Description</h3>
            <p>{task.description || 'No description yet'}</p>
        </section>
    )
}
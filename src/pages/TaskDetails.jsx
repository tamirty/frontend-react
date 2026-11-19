
export function TaskDetails() {

    return (
        <dialog className="task-details" ref={dialog}>
            < Link to={`/board/${boardId}`}>
                <button>X</button>
            </Link >
            <h1>Task Details</h1>
            {
                task &&
                <div>
                    <h3> {task.title}</h3>
                    <div className="cmps-container">
                        {cmps.map((cmp, idx) => <DynamicCmp cmp={cmp} key={idx} />)}
                    </div>
                </div >}
        </dialog >
    )
}
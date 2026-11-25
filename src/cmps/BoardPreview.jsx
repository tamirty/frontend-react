import { Link } from 'react-router-dom'

export function BoardPreview({ board }) {
    return (
        <Link to={`/board/${board._id}`}>
            <article className="board-preview">
                <h3>{board.title}</h3>

                {board.createdBy && (
                    <p>Created by: {board.createdBy.fullname}</p>
                )}

                <p>Groups: {board.groups?.length || 0}</p>
            </article>
        </Link>
    )
}
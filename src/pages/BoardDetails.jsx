import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadBoard, addBoardMsg } from '../store/actions/board.actions'
import { GroupList } from '../cmps/GroupList'
import '../assets/styles/cmps/board/BoardDetails.css'


export function BoardDetails() {

  const { boardId } = useParams()
  const board = useSelector(storeState => storeState.boardModule.board)

  useEffect(() => {
    loadBoard(boardId)
  }, [boardId])

  async function onAddBoardMsg(boardId) {
    try {
      await addBoardMsg(boardId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Board msg added`)
    } catch (err) {
      showErrorMsg('Cannot add board msg')
    }

  }

  if (!board || board._id !== boardId) {
    return <div>Loading...</div>
  }

  return (
    <section className="board-details">
      <header className="board-header">
        <h1>{board.title}</h1>
        <Link to="/board">Back to list</Link>
      </header>

      <GroupList groups={board.groups || []} />

    </section>
  )
}
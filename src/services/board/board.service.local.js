
import { storageService } from '../async-storage.service'
import { makeId, makeLorem } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'board'

_createDemoBoards()

export const boardService = {
    query,
    getById,
    save,
    remove,
    addBoardMsg
}
window.cs = boardService


async function query(filterBy = { txt: '' }) {
    var boards = await storageService.query(STORAGE_KEY)

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        boards = boards.filter(board => regex.test(board.title))
    }

    return boards
}

function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, boardId)
}

async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
    } else {
        const boardToSave = {
            ...board,
            createdBy: userService.getLoggedinUser(),
        }
        savedBoard = await storageService.post(STORAGE_KEY, boardToSave)
    }
    return savedBoard
}

async function addBoardMsg(boardId, txt) {
    // Later, this is all done by the backend
    const board = await getById(boardId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    board.msgs.push(msg)
    await storageService.put(STORAGE_KEY, board)

    return msg
}

async function _createDemoBoards() {
    const boards = await storageService.query(STORAGE_KEY)

    if (boards.length) return

    const demoBoards = [
        {
            _id: 'b101',
            title: 'Robot dev proj',
            isStarred: false,
            createdBy: {
                _id: 'u101',
                fullname: 'Abi Abambi',
                imgUrl: ''
            },
            style: {
                backgroundImage: ''
            },
            labels: [],
            members: [],
            groups: [
                {
                    id: 'g101',
                    title: 'To Do',
                    tasks: [
                        { id: 'c101', title: 'Replace logo', description: makeLorem(), assignedMembers: [], isComplete: false},
                        { id: 'c102', title: 'Add samples', description: makeLorem(), assignedMembers: [], isComplete: false}
                    ],
                    style: {}
                },
                {
                    id: 'g102',
                    title: 'In Progress',
                    tasks: [
                        { id: 'c103', title: 'Build homepage', description: makeLorem(), assignedMembers: [], isComplete: true}
                    ],
                    style: {}
                }
            ],
            activities: []
        },
        {
            _id: 'b102',
            title: 'Website project',
            isStarred: true,
            labels: [],
            members: [],
            groups: [
                {
                    id: 'g103',
                    title: 'To Do',
                    tasks: [
                        { id: 'c104', title: 'Create header', description: makeLorem(), assignedMembers: [], isComplete: true}
                    ],
                    style: {}
                }
            ],
            activities: []
        }
    ]
    for (const board of demoBoards) {
        await storageService.post(STORAGE_KEY, board)
    }

}
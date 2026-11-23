const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { boardService as local } from './board.service.local'
import { boardService as remote } from './board.service.remote'

function getEmptyBoard() {
    return {
        _id: makeId(),
        title: '',
        isStarred: false,
        archivedAt: null,
        style: {
            backgroundImage: ''
        },
        members: [],
        labels: [],
        groups: [],
        activities: [],
        createdBy: null,
    }
}
function getEmptyGroup() {
    return {
        id: makeId(),
        title: '',
        archivedAt: null,
        tasks: [],
        style: {}
    }
}
function getEmptyTask() {
    return {
        id: makeId(),
        title: '',
        status: '',
        priority: '',
        dueDate: null,
        description: '',
        memberIds: [],
        labelIds: [],
        style: {},
        archivedAt: null,
        comments: [],
        checklists: [],
        byMember: null,
    }
}

function getDefaultFilter() {
    return {
        txt: '',
        sortField: '',
        sortDir: '',
    }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const boardService = { getEmptyBoard, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.boardService = boardService

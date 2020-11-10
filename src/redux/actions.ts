export const ADD_TASK = 'ADD_TASK'
export const LOAD_TASKS = 'LOAD_TASKS'
export const CHANGE_STATUS = 'CHANGE_STATUS'


export interface Title {
    title: string
}

export interface ID {
    id: number
}

export interface Add {
    type: typeof ADD_TASK,
    payload: Title
}

export interface Change {
    type: typeof CHANGE_STATUS,
    payload: number
}

export interface Load {
    type: typeof LOAD_TASKS,
    payload: Tasks[]
}


export interface Tasks {
    id: number,
    title: Title,
    status: boolean
}

export interface TasksList {
    tasksList: Tasks[]
}

export type TasksActionTypes = Add | Change | Load


export function AddTask(title: Title): Add {
    return {
        type: ADD_TASK,
        payload: title
    }
}

export function ChangeStatus(id: number): Change {
    return {
        type: CHANGE_STATUS,
        payload: id
    }
}


export function LoadTasks(list: Tasks[]): Load {
    return {
        type: LOAD_TASKS,
        payload: list
    }
}

const initialState: TasksList = {
    tasksList: []
}


export const tasksReducer = (
    state = initialState,
    action: TasksActionTypes
): TasksList => {
    switch (action.type) {
        case ADD_TASK:
            const newTask: Tasks = { id: state.tasksList?.length + 1 || 0, title: action.payload, status: true }
            return { tasksList: [...state.tasksList || [], newTask] }
        case CHANGE_STATUS:
            const newArr = [...state.tasksList];
            const findTask = newArr.find((task) => task.id === action.payload);
            if (findTask) {
                findTask.status = !findTask.status;
                return { tasksList: newArr }
            }
            else return state;
        case LOAD_TASKS: return { tasksList: [...state.tasksList, ...action.payload] }
        default:
            return state;
    }
}
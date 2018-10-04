import { actionType } from '../../actions/action-type';
import { changeTaskStatus, removeTask, createNewTask } from './task-action';

const initialState = {
    Firsttask1: {
        id: "Firsttask1",
        type: "task",
        parent: "categoryFirst1",
        name: "First task",
        description: "Test task in db",
        checked: false
    },
    Firsttask2: {
        id: "Firsttask2",
        type: "task",
        parent: "categoryFirst1",
        name: "First task",
        description: "Test task in db",
        checked: false
    },
    taskOne3: {
        id: "taskOne3",
        type: "task",
        parent: "categorySecond2",
        name: "Second task",
        description: "Test task in db",
        checked: true
    },
    taskOne4: {
        id: "taskOne4",
        type: "task",
        parent: "Subcategoryone4",
        name: "Second task",
        description: "Test task in db",
        checked: true
    }
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_STATUS_TASK:
            return changeTaskStatus(state, action.payload);
        case actionType.REMOVE_TASK:
            return removeTask(state, action.payload);
        case actionType.CREATE_TASK:
            return createNewTask(state, action.payload);
        default:
            return state;
    }
};
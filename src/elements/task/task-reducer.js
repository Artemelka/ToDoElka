import { actionType } from '../../actions/action-type';
import { changeTaskStatus, removeTask, createNewTask } from './task-action';

const initialState = {
    Firsttask1: {
        id: "Firsttask1",
        type: "task",
        parent: "categoryFirst1",
        name: "First task",
        description: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
        time: "September 14, 2016",
        author: "Artemelka",
        checked: false
    },
    Firsttask2: {
        id: "Firsttask2",
        type: "task",
        parent: "categoryFirst1",
        name: "First task",
        description: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
        time: "October 18, 2018",
        author: "Unknow User",
        checked: false
    },
    taskOne3: {
        id: "taskOne3",
        type: "task",
        parent: "categorySecond2",
        name: "Second task",
        description: "Test task in db",
        time: "September 1, 2017",
        author: "Artemelka",
        checked: true
    },
    taskOne4: {
        id: "taskOne4",
        type: "task",
        parent: "Subcategoryone4",
        name: "Second task",
        description: "Test task in db",
        time: "September 30, 2018",
        author: "Artemelka",
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
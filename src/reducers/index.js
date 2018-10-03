import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { categoryReducer } from '../elements/category-list/category-reducer';

const initialState = {
    users: {
        artemelka: {}
    },
    tasks: {
        Firsttask1: {
            id: "Firsttask1",
            type: "task",
            parent: "categoryFirst1",
            name: "First task",
            description: "Test task in db",
            checked: false
        },
        Firsttask2: {
            id: "First task2",
            type: "task",
            parent: "categoryFirst1",
            name: "First task",
            description: "Test task in db",
            checked: false
        },
        taskOne3: {
            "id": "taskOne3",
            "type": "task",
            "parent": "categorySecond2",
            "name": "Second task",
            "description": "Test task in db",
            "checked": true
        },
        "taskOne4": {
            "id": "taskOne4",
            "type": "task",
            "parent": "Subcategoryone4",
            "name": "Second task",
            "description": "Test task in db",
            "checked": true
        }
    },
    services: {
        sidebarOpen: true,
        isLogin: false
    }
};

const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const servicesReducer = (state = initialState.services, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default combineReducers({
  router: routerReducer,
  allCategory: categoryReducer,
  allTasks: taskReducer,
  users: usersReducer,
  services: servicesReducer
});
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

const initialState = {
  users: {
    artemelka: {}
  },
  category: {
    categoryFirst1: {
        id: "categoryFirst1",
        num: 1,
        type: "category",
        parent: "",
        name: "category First",
        description: "Test category in db",
        active: false
    },
    categorySecond2: {
        id: "categorySecond2",
        num: 2,
        type: "category",
        parent: "",
        name: "category Second",
        description: "Test category in db",
        active: true
    },
    "categoryThird3": {
        "id": "categoryThird3",
        "num": 3,
        "type": "category",
        "parent": "",
        "name": "category Third",
        "description": "Test category in db",
        "active": false
    },
    "Subcategoryone4": {
        "id": "Subcategoryone4",
        "num": 4,
        "type": "category",
        "parent": "categoryFirst1",
        "name": "Sub category one",
        "description": "Test sub category in db",
        "active": false
    },
    "Subcategorytwo5": {
        "id": "Subcategorytwo5",
        "num": 5,
        "type": "category",
        "parent": "categoryFirst1",
        "name": "Sub category two",
        "description": "Test sub category in db",
        "active": false
    },
    "Subcategoryone6": {
        "id": "Subcategoryone6",
        "num": 6,
        "type": "category",
        "parent": "categoryFirst1",
        "name": "Sub category one",
        "description": "Test sub category in db",
        "active": false
    }
  },
  tasks: {},
  services: {
    sidebarOpen: true
  }
};

const servicesReducer = (state = initialState.services, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const categoryReducer = (state = initialState.category, action) => {
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
  allTask: taskReducer,
  users: usersReducer,
  services: servicesReducer
});
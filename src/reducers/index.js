import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { categoryReducer } from '../elements/category-list/category-reducer';

const initialState = {
    users: {
        artemelka: {}
    },
    tasks: {},
    services: {
        sidebarOpen: true,
        isLogin: false
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
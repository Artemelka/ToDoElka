import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { categoryReducer } from '../elements/category-list/category-reducer';
import { taskReducer } from '../elements/task';

const initialState = {
    users: {
        artemelka: {}
    },
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
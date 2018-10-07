import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { categoryReducer } from '../elements/category-list/category-reducer';
import { taskReducer } from '../elements/task';
import { servicesReducer } from '../services/services-reducers';

const initialState = {
    user: {
        name: 'Artemelka'
    }
};

const usersReducer = (state = initialState.user, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default combineReducers({
  router: routerReducer,
  allCategory: categoryReducer,
  allTasks: taskReducer,
  user: usersReducer,
  services: servicesReducer
});
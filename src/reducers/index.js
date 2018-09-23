import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

const initialState = {
  users: {
    artemelka: {
      category: {},
      tasks: {},
    }
  }
};

const taskReducer = (state = initialState.users, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const categoryReducer = (state = initialState.users, action) => {
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
  users: usersReducer
});
import { actionType } from '../actions/action-type';
import { login } from './services-action';

const initialState = {
    sidebarOpen: true,
    isLogin: false
};

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return login(state, action.payload);
        default:
            return state;
    }
};
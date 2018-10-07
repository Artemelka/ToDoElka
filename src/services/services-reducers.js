import { actionType } from '../actions/action-type';
import { fakeLogin } from './services-action';

const initialState = {
    isLogin: false
};

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return fakeLogin(state, action.payload);
        default:
            return state;
    }
};
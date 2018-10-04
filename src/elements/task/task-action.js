export const changeTaskStatus = (state, payload) => ({
    ...state,
    [payload.id]: {
        ...state[payload.id],
        checked: payload.status
    }
});

export const removeTask = (state, payload) => {
    delete state[payload];
    return {...state};
};

export const createNewTask = (state, payload) => {
    return {
        ...state,
        ...payload
    };
};
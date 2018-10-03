import { actionType } from '../../actions/action-type';
import {
    removeCategory,
    createNewCategory,
    setActiveCategory,
    editCategoryName
} from './category-action';

const initialState = {
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
        active: false
    },
    categoryThird3: {
        id: "categoryThird3",
        num: 3,
        type: "category",
        parent: "",
        name: "category Third",
        description: "Test category in db",
        active: false
    },
    Subcategoryone4: {
        id: "Subcategoryone4",
        num: 4,
        type: "category",
        parent: "categoryFirst1",
        name: "Sub category one",
        description: "Test sub category in db",
        active: false
    },
    Subcategorytwo5: {
        id: "Subcategorytwo5",
        num: 5,
        type: "category",
        parent: "categoryFirst1",
        name: "Sub category two",
        description: "Test sub category in db",
        active: false
    },
    Subcategoryone6: {
        id: "Subcategoryone6",
        num: 6,
        type: "category",
        parent: "categoryFirst1",
        name: "Sub category one",
        description: "Test sub category in db",
        active: false
    }
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REMOVE_CATEGORY:
            return removeCategory(state, action.payload);
        case actionType.CREATE_CATEGORY:
            return createNewCategory(state, action.payload);
        case actionType.ACTIVE_CATEGORY:
            return setActiveCategory(state, action.payload);
        case actionType.EDIT_CATEGORY:
            return editCategoryName(state, action.payload);
        default:
            return state;
    }
};
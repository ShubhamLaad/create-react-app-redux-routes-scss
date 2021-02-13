import ACTION_CONST from "../consts/ACTION_CONST";

const initialState = {
    contries: [],
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_CONST.SET_USERS:
            return { ...state, contries: action.payload };
        default:
            return state;
    }
};
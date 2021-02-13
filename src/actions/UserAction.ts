import axios from "axios";
import ACTION_CONST from "../consts/ACTION_CONST";

export type IUserAction = {
    type: string,
    payload: any,
}

export default class UserAction {
    static setUsers() {
        return ({
            type: ACTION_CONST.SET_USERS,
        });
    }

    static getUsers() {
        return (dispatch: (arg0: { type: string; }) => any) => axios.get(`https://api.github.com/user?q=shubham`)
            .then((res) => dispatch(UserAction.setUsers(res)))
    }
}
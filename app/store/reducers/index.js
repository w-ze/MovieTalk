import { combineReducers } from "redux";
import counterReducer from "./counter"
import loginReducer from "./login"
// 存入仓库
let reducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
});

export default reducers;
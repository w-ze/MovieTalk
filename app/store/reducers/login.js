
function loginReducer(state = { status: "fail" }, action) {
    switch (action.type) {
        case "LOGIN":
            return Object.assign({}, state, action.data);
        case "LOGOUT":
            return Object.assign({}, state, action.data);
        default: 
            return state;
    }
}

export default loginReducer
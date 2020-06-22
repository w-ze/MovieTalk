// 2、商品装车   action为传过来 {type:"INC",data:{count:++this.count}}  state存值total：1，把传过来的count赋值给total
function counterReducer(state = { count: 1 }, action) {
    switch (action.type) {
        case "INC":
            // state.count=action.data.count;
            // console.log(state.total)
            // console.log(action.data.count)
            return Object.assign({}, state, action.data);   //...state   {total:action.data.count}浅拷贝
        case "DEC":
            return Object.assign({}, state, action.data);   //...state   {total:action.data.count}浅拷贝
        default:
            return state;
    }
}

export default counterReducer

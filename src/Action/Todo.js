import * as ActionTypes from  '../Constant/ActionTypes'
let nextTodoId = 0;

export const addTodo = content  =>(
{
    type : ActionTypes.ADD_TODO,
    payload :
    {
        id: ++ nextTodoId,
        content
    }
})

export const toggleTodo = id => ({

    type:ActionTypes.TOGGLE_TODO,
    payload : {
        id
    }
})


export const setFilter = filter => ({ type: ActionTypes.SET_FILTER, payload: { filter } });


import React from 'react'
import { connect } from  'react-redux'
import Todo from './Todo'

import * as Helper from '../Helper/Todo'

const TodoList = ({todos}) => {
    console.log(todos);
    return(
        <ul className="todo-list">
            {todos && todos.length 
                ? todos.map((todo,index ) =>{
                    return <Todo key={`todo-${todo.id}`} todo={todo} />
            }): "No todos, yay!"}
        </ul>
    );
}


const mapStateToprops = state =>
{
    // map đi qua từng phần tử và biến đổi dữ liệu và trả lại những gì ta muốn là một cái aray mới
    // const { allIds , byIds} = state.Todo;
    // const todos = allIds && allIds.length  
    //                 ? allIds.map(id => (byIds ? {...byIds[id],id} :null))
    //                 :null;
    // return {
    //     todos
    // }    

    const { VisibilityFilter,Todo } = state;
    
  const todos = Helper.getTodosByVisibilityFilter(Todo,VisibilityFilter);
  return { todos }
}

export default connect(mapStateToprops)(TodoList)
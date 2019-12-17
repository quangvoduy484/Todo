import React from "react";
import cx from "classnames";
import { connect } from 'react-redux';
import * as  actions from  '../Action/Todo'
const Todo = ({ todo,toggleAction }) =>
{
   const handleToggle = () =>
    {
        toggleAction(todo.id)
    }
    return(
        <li className="todo-item" onClick={ handleToggle} >
            {todo && todo.completed ? "👌" : "👋"}{" "}
            {/* A simple JavaScript utility for conditionally joining classNames together. ,  */}
            <span
                className={cx(
                    "todo-item__text",
                    todo && todo.completed && "todo-item__text--completed"
                )}
            >
            {todo.content}
    </span>
         </li>  
    )
}

const mapDispactchToProps = dispatch => {
    return {
        toggleAction :  id => dispatch(actions.toggleTodo(id))
    } 
}
export default connect(null,mapDispactchToProps)(Todo); 
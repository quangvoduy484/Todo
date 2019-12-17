import { connect } from 'react-redux'
import * as  actions from  '../Action/Todo'
import React from 'react'


class AddTodo extends  React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = { input: "" };
    }    
    
 
    handOnchange = event => {
       this.setState( {input :event.target.value})
    }

    handleSubmit = () => {
        // dispatches actions to add todo
        this.props.actionAddTodo(this.state.input);
        // sets state back to empty string
        this.setState({ input: '' })
    }
    render()
    {
        return (
            <div>
                      <input value={this.state.input} onChange={this.handOnchange} />
                      <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
        )
    }
}
// mapStateToProps mapDispatchToProps
const mapDispactchToProps = dispatch => {
   return { actionAddTodo : (content) => dispatch(actions.addTodo(content))}
};

export default connect(null,mapDispactchToProps)(AddTodo)
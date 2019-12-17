import React from 'react';
import { connect } from 'react-redux';
import * as  actions from  '../Action/ShowHideButton'


function   Header(props ) 
{
    // two variable 
    const {showHideButton ,actionShowhide} = props;
    console.log(showHideButton);

    const showHide =  () => {
        actionShowhide(!showHideButton.status)
    }

    return (
        <React.Fragment>
            <button onClick={showHide}>Show button</button>
            <h1>{ showHideButton.status ? "true":"false"} </h1>
        </React.Fragment>
    )
}
// data need from store
const mapStateToProps = state => {
    return {
        showHideButton: state.showHideButton,
    }
}
//  function to dispatch
const mapDispactchToProps = dispatch => {
    return {
        actionShowhide: (status) => dispatch(actions.ShowButton(status)),
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(Header);
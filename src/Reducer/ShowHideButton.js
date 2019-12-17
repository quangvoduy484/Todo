import * as ActionTypes from  '../Constant/ActionTypes'

var initvalueShowHide ={
    status : true,
    message : "Show button"

}
export const showHideButton = (state = initvalueShowHide ,action ) => {
    switch (action.type) {
        case  ActionTypes.SHOW_HIDE_BUTTON:
                return {
                    ...state,
                    status : action.status ,
                    message : action.text
                }
        default:
            return state;
            
    }
}
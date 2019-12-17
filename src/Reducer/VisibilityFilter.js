import * as ActionType from  '../Constant/ActionTypes'

const initialState = ActionType.VISIBILITY_FILTERS.ALL;


export const VisibilityFilter = (state = initialState, action) => {
    
    switch (action.type) {
      case ActionType.SET_FILTER: {
        return action.payload.filter;
      }
      default: {
        return state;
      }
    }
  };
  

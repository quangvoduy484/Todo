import * as ActionTypes from  '../Constant/ActionTypes'

const initialState = {
    allIds: [],
    byIds: {}
  };

export const Todo = (state = initialState , action) =>
{
    
    switch (action.type) {
        case  ActionTypes.ADD_TODO:{
            const {id , content } = action.payload;
          
            return {
                ...state,
                //add allIds
                allIds : [...state.allIds,id],
                byIds :
                {
                    ...state.byIds,
                    [id] :{
                        content,
                        completed: false
                    }
                }
            }
        }
        case ActionTypes.TOGGLE_TODO:{
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                      }
                }
            }
        }

        default:
            return state;
    }

}
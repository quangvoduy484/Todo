import * as ActionType from '../Constant/ActionTypes'

export const getTodoList = todos =>
    todos ? todos.allIds : [];

export const getTodoById = (todos, id) =>
    todos && todos.byIds
    ? { ...todos.byIds[id], id }
    : {};
    
    /**
     * example of a slightly more complex selector
     * select from store combining information from multiple reducers
     */
export const getTodos = todos =>
    getTodoList(todos).map(id => getTodoById(todos, id));

    
export const getTodosByVisibilityFilter = (todos, visibilityFilter) => {

        console.log(todos);
        console.log(visibilityFilter);

        const allTodos = getTodos(todos)
        switch (visibilityFilter) {
          case ActionType.VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed)
          case ActionType.VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed)
          case ActionType.VISIBILITY_FILTERS.ALL:
          default:
            return allTodos
        }
}
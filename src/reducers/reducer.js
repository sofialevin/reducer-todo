export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
          return {...state, todos: [
              ...state.todos, action.payload 
          ]}
        case 'REMOVE':
            return {...state, todos: state.todos.filter((todo) => todo.completed === false)}
        case 'TOGGLE':
            return {
                ...state, todos: state.todos.map((todo) => {
                    if (action.payload === todo.id) {
                        console.log(state)
                    return {
                      ...todo,
                      completed: !todo.completed
                    };
                  } else {
                    return todo;
                  }})
            }
        default:
          return state
      }
}

export const initialState = {
    todos: [
            {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};
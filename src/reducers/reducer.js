export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
          return {...state, todos: [
              ...state.todos, action.payload 
          ]}
        // case 'REMOVE':
        //     return state.filter((todo) => todo.id !== action.payload.id)
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
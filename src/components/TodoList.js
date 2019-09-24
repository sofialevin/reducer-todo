import React, { useReducer } from 'react';
import Todo from "./Todo";
import { reducer, initialState } from "../reducers/reducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {
                state.map((todo) => <Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
}
 
export default TodoList;
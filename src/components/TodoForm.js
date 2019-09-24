import React, { useState, useReducer } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { reducer, initialState } from "../reducers/reducer";
import Todo from "./Todo";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
      };

    return (
        <div>
            <Form onSubmit={(event) => {
                event.preventDefault();
                dispatch({ type: "ADD", payload: {
                    item: newTodo,
                    completed: false,
                    id: Date.now()
                    }
                })
                setNewTodo("");
            }}>
                <Form.Field>
                    <input placeholder='Todo' value={newTodo} onChange={handleChanges}/>
                </Form.Field>
                <Button type='submit'>Add Todo</Button>
            </Form>
            <div>
                {
                    state.todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
                }
            </div>
        </div>
        
    );
}
 
export default TodoForm;
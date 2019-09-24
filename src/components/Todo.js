import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const Todo = (props) => {

    const handleCheck = () => {
        props.toggle(props.todo.id)
    }

    return (
        <Checkbox onChange={handleCheck} checked={props.todo.completed} label={props.todo.item}/>
    );
}
 
export default Todo;
import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const Todo = (props) => {

    const handleCheck = () => {
        props.toggle(props.todo.id)
    }

    return (
        <div>
            <Checkbox onChange={handleCheck} checked={props.todo.completed} label={props.todo.item}/>
        </div>
    );
}
 
export default Todo;
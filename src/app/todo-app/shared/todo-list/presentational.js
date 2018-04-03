import React from "react";
import { Link } from 'react-router-dom';

const TodoList = ({ todoList, toggleTodo }) => {

    const handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        toggleTodo(i, value);
    }

    return (
        <ul>
            {todoList.map((obj, i) => (
                <li key={i}>
                    <input
                        name={i}
                        type="checkbox"
                        checked={obj.done}
                        onChange={ e => handleToDoCheckBoxChange(e, i) }
                    />
                    <Link to={`/todo/${i}`}>{obj.name}</Link>
                </li>)
            )}
        </ul>
    )
};

export default TodoList;
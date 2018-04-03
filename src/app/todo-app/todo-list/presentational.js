import React from "react";

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
                    {obj.name}
                </li>)
            )}
        </ul>
    )
};

export default TodoList;
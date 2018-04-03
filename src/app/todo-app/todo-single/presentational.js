import React from "react";

const TodoSingle = ({ todoList, toggleTodo, match }) => {

    const handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        toggleTodo(i, value);
    }

    return (
        <div> 
            <h1>TodoSingle works!</h1>
            <ul>
                {todoList
                    .filter((obj, i) => i == match.params.id)
                    .map((obj, i) => (
                        <li key={i}>
                            <input
                                name={i}
                                type="checkbox"
                                checked={obj.done}
                                onChange={ e => handleToDoCheckBoxChange(e, i) }
                            />
                            {obj.name}
                        </li>)
                    )
                }
            </ul>
        </div>
    )
};

export default TodoSingle;
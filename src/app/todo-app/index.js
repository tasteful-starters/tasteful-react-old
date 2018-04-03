import React from "react";

import TodoList from './todo-list';
import TodoAdder from './todo-adder';

const TodoApp = () => (
    <div>
        <h1>ToDo works!</h1>

        <TodoAdder />

        <TodoList />
    </div>
);

export default TodoApp;
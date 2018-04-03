import React from "react";
import { Route } from 'react-router-dom';

import TodoList from './shared/todo-list';
import TodoAdder from './shared/todo-adder';
import TodoSingle from './todo-single';

const TodoApp = () => (
    <div>
        <h1>ToDo works!</h1>

        <TodoAdder />

        <TodoList />

        <Route path="/todo/:id" component={TodoSingle}/>
    </div>
);

export default TodoApp;
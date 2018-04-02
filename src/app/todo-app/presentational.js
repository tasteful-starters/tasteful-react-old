import React, { Component } from "react";

class ToDoApp extends Component {

    constructor(props) {
        super();    // https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do

        this.state = {
            newTodo: ''
        }
    }

    handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        this.props.toggleTodo(i, value);
    }

    handleNewToDoChange = (event) => {
        this.setState({newTodo: event.target.value});
    }

    addTodo = () => {
        this.props.addTodo(this.state.newTodo);
    }

    render() {
        return (
            <div>
                <h1>ToDo works!</h1>

                <div>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleNewToDoChange}
                    />
                    <button onClick={this.addTodo}>Add ToDo</button>
                </div>

                <ul>
                    {this.props.todoList.map((obj, i) => (
                        <li key={i}>
                            <input
                                name={i}
                                type="checkbox"
                                checked={obj.done}
                                onChange={ e => this.handleToDoCheckBoxChange(e, i) }
                            />
                            {obj.name}
                        </li>)
                    )}
                </ul>

                <hr />
                <h2>Debug Stuff</h2>
                <pre>{JSON.stringify(this.props.todoList, null, 2)}</pre>
            </div>
        );
    }
}

export default ToDoApp;
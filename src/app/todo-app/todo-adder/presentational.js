import React, { Component } from "react";

class TodoAdder extends Component {

    constructor(props) {
        super();

        this.state = {
            newTodo: ''
        }
    }

    handleNewToDoChange = (event) => {
        this.setState({ newTodo: event.target.value });
    }

    addTodo = () => {
        this.props.addTodo(this.state.newTodo);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleNewToDoChange}
                />
                <button onClick={this.addTodo}>Add ToDo</button>
            </div>
        )
    }
}

export default TodoAdder;
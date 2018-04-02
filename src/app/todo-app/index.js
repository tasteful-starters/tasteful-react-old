import React, { Component } from "react";

class ToDo extends Component {

    constructor(props) {
        super();    // https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do

        this.state = {
            newTodo: '',
            list: [
                { name: 'clean room', done: false },
                { name: 'make pancakes', done: false },
                { name: 'spend 3 hours on reddit', done: true }
            ]
        }
    }

    handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;

        this.setState({ 'list': 
            [...this.state.list].map((obj, j) => {
                if (i === j) {
                    return {
                        ...obj,
                        done: value
                    }
                }
                return obj;
            })
        })
    }

    handleNewToDoChange = (event) => {
        this.setState({newTodo: event.target.value});
    }

    addTodo = () => {
        this.setState({ 'list': 
            [
                ...this.state.list, {
                    name: this.state.newTodo,
                    done: false
                }
            ]
        })
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
                    {this.state.list.map((obj, i) => (
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
                <pre>{JSON.stringify(this.state.list, null, 2)}</pre>
            </div>
        );
    }
}

export default ToDo;
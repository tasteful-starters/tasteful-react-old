const AddTodo = (name) => ({
    type: '[TODO-LIST] Add TODO',
    name
});

const ToggleTodo = (index, value) => ({
    type: '[TODO-LIST] Toggle TODO',
    index,
    value
});

export default {
    AddTodo,
    ToggleTodo,
}
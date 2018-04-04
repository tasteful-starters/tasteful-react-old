const LoadRequest = () => ({
    type: '[COUNTER] LoadRequest'
});

const LoadSucceeded = () => ({
    type: '[COUNTER] LoadSucceeded'
});

const LoadFailed = () => ({
    type: '[COUNTER] LoadFailed'
});

const Increment = () => ({
    type: '[COUNTER] Increment'
});

const Decrement = () => ({
    type: '[COUNTER] Decrement'
});

export default {
    Increment,
    Decrement,
    LoadRequest,
    LoadSucceeded,
    LoadFailed
}
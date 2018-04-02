import React from "react";

const Home = ({ counter, decrement, increment }) => (
    <div>
        <h1>Home works!</h1>
        <hr />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default Home;
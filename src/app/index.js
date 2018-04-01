import React from "react";

import env from '@env';

const App = () => {
    console.log('env', env);
    return (
        <div className="container">
            <div className="col-12">
                <h1>Hello, world!</h1>
            </div>
        </div>
    )
};

export default App;
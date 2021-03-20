import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

const myEl = React.createElement(
    'h1',
    null,
    'Hello React!'
);

ReactDOM.render(myEl, document.getElementById('root'));
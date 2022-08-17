import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// https://reactjs.org/docs/strict-mode.html

ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById('root'));

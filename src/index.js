import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// https://reactjs.org/docs/strict-mode.html

ReactDOM.render(
<StrictMode>
    <App />
</StrictMode>,
document.getElementById('root'));

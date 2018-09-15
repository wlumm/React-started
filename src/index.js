import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// This is for Javascript get datetime:
// new Date().toLocaleString()

// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }

// const greeting = React.createElement ('h1', {}, 'Hello World', getCurrentDate())

ReactDOM.render(<App/> , document.getElementById('root'));
registerServiceWorker();

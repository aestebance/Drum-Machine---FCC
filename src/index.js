import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sounds} from './utils/sounds';

document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);

    if (audio) {
        audio.play();
        const parent = audio.parentNode;
        parent.classList.add('active');
        const title = document.getElementById('currentSound');
        title.innerText = sounds.filter((sound) => sound.letter === key.toUpperCase())[0].id;
        audio.addEventListener('ended', () => {
            parent.classList.remove('active');
        });
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

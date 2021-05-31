import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Mern from './Mern';
import {BrowserRouter} from 'react-router-dom'
// import MyPortfolio from './MyPortfolio';
import Chat from './chat/Index'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    {/* <MyPortfolio /> */}
    {/* <Mern /> */}
        <Chat />
    {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

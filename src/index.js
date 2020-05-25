import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

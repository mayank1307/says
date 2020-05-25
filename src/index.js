import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';
// import "./assets/css/bootstrap.min.css";
// import "./assets/scss/now-ui-kit.scss";
// import "./assets/demo/demo.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import App from './App';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>

);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import Admin from './components/Admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/admin' Component={Admin} />
      </Routes>
    </Router>
  </React.StrictMode>
);

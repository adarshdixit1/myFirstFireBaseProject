import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { privateRoute, publicRoutes } from './route';
import NonAuthLayout from '../src/Layout/NonAuthLayout';
import PrivateLayout from '../src/Layout/AuthLayout';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        {privateRoute.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<PrivateLayout><route.component /></PrivateLayout>}
          />
        ))}

        {publicRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<NonAuthLayout><route.component /></NonAuthLayout>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPasswordView from './views/auth/ResetPasswordView';
import LoginView from './views/auth/LoginView';
import NoMatchView from './views/NoMatchView';
import AuthMiddleware from './middleware/AuthMiddleware';
import HomeView from './views/HomeView';
import AnnonceView from './views/AnnonceView';

// Auth middleware call
AuthMiddleware.checkAuthState();
// DOM Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<LoginView />} />
        <Route path="/reset-password" element={<ResetPasswordView />} />
        {/* Dashboard routes */}
        <Route path="/" element={AuthMiddleware.makePrivateRoute(<App />)}>
          <Route path="/home" element={AuthMiddleware.makePrivateRoute(<HomeView />)} />
          <Route path="/annonces" element={AuthMiddleware.makePrivateRoute(<AnnonceView />)} />
        </Route>
        {/* No match route */}
        <Route path="*" element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

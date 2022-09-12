import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route
      path="*"
      element={
        <h2>Route not found!</h2>
      }
    />
  </Routes>
</BrowserRouter>);
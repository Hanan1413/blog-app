import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BlogProvider from "./context/BlogProvider.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <App />
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppcontextProvider from "./component/AppContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppcontextProvider>
        <App />
      </AppcontextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

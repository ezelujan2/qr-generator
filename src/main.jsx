import React from "react";
import ReactDOM from "react-dom"; // Asegúrate de importar react-dom
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

// Utiliza ReactDOM.createRoot() para renderizar tu aplicación
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

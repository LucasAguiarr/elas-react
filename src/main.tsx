import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/auth";
import { GlobalStyle } from "./styles/GlobalStyles";


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

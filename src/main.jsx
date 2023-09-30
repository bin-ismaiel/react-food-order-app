import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AppContextProvider } from "./context/app-context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);

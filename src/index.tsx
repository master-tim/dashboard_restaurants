import React from "react";
import ReactDOM from "react-dom/client";
import { SetupWorkerApi } from "msw";
import { StyledEngineProvider } from "@mui/material";

import "./index.css";
import App from "./App";
import Dashboard from "./Dashboard";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV === "development") {
  const { worker }: { worker: SetupWorkerApi } = require("./mocks/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Dashboard />
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

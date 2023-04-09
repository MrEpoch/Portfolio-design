import React from "react";
import { Route, Router } from "react-router-dom";
import App from "./App";

export default function Routers() {
  return (
    <>
      <Router>
        <Route path="/" element={<App />} />
      </Router>
    </>
  );
}

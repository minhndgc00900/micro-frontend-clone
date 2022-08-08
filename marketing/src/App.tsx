import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

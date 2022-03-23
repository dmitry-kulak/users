import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Users } from "./pages/Users/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/users" />} />
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Signin from "../pages/Signin";
import SignupLayout from "./layout/SignupLayout";
import Dashboard from "../pages/Dashboard";
import DashLayout from "./layout/DashLayout";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SignupLayout />}>
            <Route path="/" element={<Signin />} />
          </Route>
          <Route element={<DashLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

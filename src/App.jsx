import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar } from "./views/sidebar/Sidebar";
import { Dashboard } from "./views/dashboard/Dashboard";

function App() {
  return (
    <div className=" d-flex h-100 w-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

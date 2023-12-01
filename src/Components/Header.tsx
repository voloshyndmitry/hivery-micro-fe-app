import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header >
      <h1>Header Main APP</h1>
      <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "center" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/app1">App1</NavLink>
        <NavLink to="/app2">App2</NavLink>
      </div>
      <hr/>
    </header>
  );
}

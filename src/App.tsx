import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Learn React Router v6</h1>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <Link to="/expenses">Expenses</Link> |{" "}
          <Link to="/invoices">Invoices</Link>
        </nav>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

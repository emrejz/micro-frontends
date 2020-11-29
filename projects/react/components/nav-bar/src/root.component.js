import React from "react";
import "./index.css";

export default function Root({ singleSpa: { navigateToUrl } }) {
  return (
    <nav className="navBarContainer">
      <h2 onClick={() => navigateToUrl("/")}>Home</h2>
      <h2 onClick={() => navigateToUrl("/counter")}>Counter</h2>
    </nav>
  );
}

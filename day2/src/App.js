import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "title", className: "title" },
  "Hello World"
);

console.log(heading);

root.render(heading);
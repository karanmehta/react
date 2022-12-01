const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "title", className: "title" },
  "Hello World from Reactjs"
);

console.log(heading);

root.render(heading);
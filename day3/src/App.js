import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = React.createElement(
                        "div", 
                        {id: "div", className: "wrapper"},
                        "Div from React.createElement",
                        React.createElement("h1", {className: "h1"}, "H1 from React.createElement"),
                          React.createElement("h2", null, "H2 from React.createElement"),
                            React.createElement("h3", null, "H3 from React.createElement"),
                              React.createElement("h4", null, "H4 from React.createElement"),
                                React.createElement("h5", null, "H5 from React.createElement"),
                                  React.createElement("input", {type: "text", value: "Hello from textbox's props", readOnly: true}, null));

const Desc = () => {
  return (
  <>
  <p>This is an example of composition of component</p>
  </>
  );
}

const Heading2 = () => (
  <div className="wrapper">
    <h1>This element is created from JSX code</h1>
    <Desc/>
  </div>
);

const HeaderComponent = () => {
  return (
    <header>
      <div className="wrapper header-items">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="100px" height="auto" />
        <div><input type="text" placeholder="Search" /></div>
        <img src="https://picsum.photos/id/48/70/50" />
      </div>
    </header>
  );  
}

const BodyComponent = function() {
  return (
  <>
  <HeaderComponent />
  {Heading}
  <Heading2 />
  </>
  );
}

console.log(Heading);
console.log(Heading2);
console.log(<Heading2/>);

root.render(<BodyComponent/>);
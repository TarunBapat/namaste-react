const heading = React.createElement("div", { id: "main" }, [
  React.createElement("h1", { id: "child" }, "I am h1 tag"),
  React.createElement("h2", { id: "child" }, "I am h2 tag"),
]);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: "1em" }}>
        <Button onClick={() => alert("Common Button clicked")}>
          Common Button
        </Button>
      </div>
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
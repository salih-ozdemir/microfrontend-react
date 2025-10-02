import React from "react";
//test
export default function Button({ children, onClick }) {
  return (
    <button
      style={{ padding: "0.5em 1em", margin: "0.5em", cursor: "pointer" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
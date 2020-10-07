import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components
// here we are making use of destructuring that is spreading, the properties
// destructuring the props let us use less code
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
// here we are exporting the text are
export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="3" {...props} />
    </div>
  );
}
// here calling the children property
export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}
import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// that is we are destructuring the props to make us write less code
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;

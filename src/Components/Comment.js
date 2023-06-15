import "./Comment.css";
import { useState, useRef } from "react";

function Comment(props) {
  const increase = useRef(false);
  if (props.commentClass == "percentage-increase") {
    increase.current = true;
  }

  return (
    <p>
      {<span class={props.commentClass}>{props.comment}</span>}
      {increase
        ? " Increase compared to last year"
        : " Decrease compared to last year"}
    </p>
  );
}

export default Comment;

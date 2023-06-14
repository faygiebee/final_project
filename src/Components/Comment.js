import "./Comment.css";
import { useState, useRef } from "react";

function Comment(props) {
  const increase = useRef(false);
  if (props.commentClass == "percentage-increase") {
    increase.current = true;
  }

  const insertComment =useRef(0);
  
/*
  if(props.longComment.length>0){
    insertComment.current=1;
  }*/


  return (
    <p>
      {/*
        if(!insertComment==0?){
          <span>{props.longComment}</span>}
          else{*/ <span class={props.commentClass}>{props.comment}</span>
        }{ increase ? " Increase compared to last year": " Decrease compared to last year"}
        
    </p>
  );
}

export default Comment;

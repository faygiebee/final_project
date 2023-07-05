import Amount from "./Amount";
import "./IncomeSection.css";
import SubTitle from "./SubTitle";
import Icon from "./Icon";
import Comment from "./Comment";
import { useRef } from "react";

function IncomeSection(props) {

  let array =props.amount;
  let sum= useRef(0);

  array.forEach(element => { 
console.log(typeof(sum.current));
  sum.current+=element.amount; 
  });

  

  
  return (
    <>
      <div className="flexIncome">
        <SubTitle title={props.title}></SubTitle>
        <Icon icon={props.icon}></Icon>
      </div>
      <Amount amount={sum.current}></Amount>
      <Comment
        commentClass={props.commentClass}
        comment={props.comment}
      ></Comment>
    </>
  );
}

export default IncomeSection;

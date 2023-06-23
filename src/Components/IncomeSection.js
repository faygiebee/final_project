import Amount from "./Amount";
import "./IncomeSection.css";
import SubTitle from "./SubTitle";
import Icon from "./Icon";
import Comment from "./Comment";

function IncomeSection(props) {
  return (
    <>
      <div className="flex">
        <SubTitle title={props.title}></SubTitle>
        <Icon icon={props.icon}></Icon>
      </div>
      <Amount amount={props.amount}></Amount>
      <Comment
        commentClass={props.commentClass}
        comment={props.comment}
      ></Comment>
    </>
  );
}

export default IncomeSection;

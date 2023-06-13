import Amount from "./Amount";
import "./IncomeSection.css";
import SubTitle from "./SubTitle";
import Icon from "./Icon";
import Comment from "./Comment";

function IncomeSection() {
  return (
    <>
      <div>
        <SubTitle></SubTitle>
        <Icon></Icon>
      </div>
      <Amount></Amount>
      <Comment></Comment>
    </>
  );
}

export default IncomeSection;

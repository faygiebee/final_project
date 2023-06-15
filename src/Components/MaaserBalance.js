import Amount from "./Amount";
import "./MaaserBalance.css";
import PurpleButton from "./PurpleButton";
import SubTitle from "./SubTitle";
import MaaserBalanceComment from "./MaaserBalanceComment";

function MaaserBalance(props) {
  return (
    <div className="box">
      <SubTitle title={"Your Ma'aser Balance"}></SubTitle>
      <Amount amount={"$7823"}></Amount>
      <MaaserBalanceComment
        longComment={"From Jan 01, 2023 to May 24, 2023"}
      ></MaaserBalanceComment>

      <div className="button-box">
        <PurpleButton></PurpleButton>
      </div>
    </div>
  );
}

export default MaaserBalance;

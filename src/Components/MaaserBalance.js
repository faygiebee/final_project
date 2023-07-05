import Amount from "./Amount";
import "./MaaserBalance.css";
import PurpleButton from "./PurpleButton";
import SubTitle from "./SubTitle";
import MaaserBalanceComment from "./MaaserBalanceComment";
import { useEffect, useRef, useState } from "react";

function MaaserBalance(props) {

  const [Maaser, UpdateMaaser]=useState(0);
  let DonationsArray = props.donationHistory;
  let DonationsSum = useRef(0);

  let IncomeArray = props.donationHistory;
  let IncomeSum = useRef(0);

  DonationsArray.forEach((element) => {
    console.log(typeof DonationsSum.current);
    DonationsSum.current += element.amount;
  });
  IncomeArray.forEach((element) => {
    console.log(typeof IncomeSum.current);
    IncomeSum.current += element.amount;
  });

  function updateMaaser(){
    UpdateMaaser(IncomeSum.current/10);
  }
  useEffect(updateMaaser,[]);
  
  console.log("masser " + Maaser);
 // let MasserAmount=maaser-DonationsSum;
  
  return (
    <div className="box">
      <SubTitle title={"Your Ma'aser Balance"}></SubTitle>
      <Amount amount={""}></Amount>
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

import "./DonationsHistory.css";
import Card from "./Card";
import SubTitle from "./SubTitle";
import DonationsHistoryList from "./DonationsHistoryList";
import Button from "./Button";

function DonationsHistory(props) {

 
  return (
    <div className=" box transaction-box">
      <SubTitle title={props.title}></SubTitle>
      <DonationsHistoryList
        title1={props.title1}
        title2={props.title2}
        history={props.history}
      ></DonationsHistoryList>
      <div class="footer-container ">
        <Button></Button>
      </div>
    </div>
  );
}

export default DonationsHistory;

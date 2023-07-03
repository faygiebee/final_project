import "./DonationsHistory.css";
import Card from "./Card";
import SubTitle from "./SubTitle";
import DonationsHistoryList from "./DonationsHistoryList";
import Button from "./Button";

function DonationsHistory(props) {

  const page=props.page;
  console.log(page);
 
  return (
    <div className=" box transaction-box">
      <SubTitle title={props.title}></SubTitle>
      <DonationsHistoryList
        title1={props.title1}
        title2={props.title2}
        history={props.history}
        page={props.page}
        DeleteDonation={props.DeleteDonation}
        IncomeDonation={props.IncomeDonation}
        Edit={props.Edit}
        object={props.object}
      ></DonationsHistoryList>
      <div class="footer-container ">{page=="Dashboard" && <Button name={"See More"}></Button>}
      </div>
    </div>
  );
}

export default DonationsHistory;

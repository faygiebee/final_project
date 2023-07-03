import "./DonationsHistoryList.css";
import Table from "./Table";

function DonationsHistoryList(props) {
    
  return (
    <div className="transaction-history">
      <Table
        title1={props.title1}
        title2={props.title2}
        history={props.history}
        page={props.page}
        DeleteDonation={props.DeleteDonation}
        IncomeDonation={props.IncomeDonation}
        Edit={props.Edit}
        object={props.object}
      ></Table>
    </div>
  );
}

export default DonationsHistoryList;

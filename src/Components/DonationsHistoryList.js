import "./DonationsHistoryList.css";
import Table from "./Table";

function DonationsHistoryList(props) {
    
    console.log("inside donations history list");
    console.log(props.history);
 
  return (
    <div className="transaction-history">
      <Table
        title1={props.title1}
        title2={props.title2}
        history={props.history}
      ></Table>
    </div>
  );
}

export default DonationsHistoryList;

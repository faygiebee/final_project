import DonationsHistory from "./DonationsHistory";
import Form from "./Form";
import "./IncomePage.css";

function IncomePage(props) {
  return (
    <div className=" bottom-container flexIncomePage">
      <div className="leftSide">
        <DonationsHistory
          history={props.incomeHistory}
          title={"Income History"}
          title1={"Company"}
          title2={"Exempt from Ma'aser"}
          page={props.page}
          IncomeDonation={props.IncomeDonation}
        ></DonationsHistory>
      </div>
      <Form income={props.income}></Form>
    </div>
  );
}
export default IncomePage;

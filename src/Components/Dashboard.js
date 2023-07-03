import "./Dashboard.css";
import TotalIncome from "./TotalIncome";
import DonationsHistory from "./DonationsHistory";
import MaaserBalance from "./MaaserBalance";
import DonationsByCategory from "./DonationsByCategory";

function Dashboard(props) {
  return (
    <>
      <div className="bottom-container">
        <div className="bottom-container__left">
          <TotalIncome></TotalIncome>
          <DonationsHistory
            history={props.donationHistory}
            title={"Donations History"}
            title1={"Donations"}
            title2={"Category"}
            page={props.page}
          ></DonationsHistory>
          <DonationsHistory
            history={props.incomeHistory}
            title={"Income History"}
            title1={"Company"}
            title2={"Exempt from Ma'aser"}
            page={props.page}
          ></DonationsHistory>
        </div>
        <div className="bottom-container__right">
          <MaaserBalance></MaaserBalance>
          <DonationsByCategory></DonationsByCategory>
        </div>
      </div>
    </>
  );
}
export default Dashboard;

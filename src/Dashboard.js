import "./Dashboard.css";
import TotalIncome from "./Components/TotalIncome";
import DonationsHistory from "./Components/DonationsHistory";
import MaaserBalance from "./Components/MaaserBalance";
import DonationsByCategory from "./Components/DonationsByCategory";

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
          ></DonationsHistory>
          <DonationsHistory
            history={props.incomeHistory}
            title={"Income History"}
            title1={"Company"}
            title2={"Exempt from Ma'aser"}
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

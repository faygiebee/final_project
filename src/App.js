import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import TotalIncome from "./Components/TotalIncome";
import DonationsHistory from "./Components/DonationsHistory";
import MaaserBalance from "./Components/MaaserBalance";
import DonationsByCategory from "./Components/DonationsByCategory";

function App() {
  return (
    <div className="container">
      <SideBar></SideBar>
      <div className="main-content">
        <div className="date"></div>
        <div className="top-container">
          <Header></Header>
        </div>
        <div className="bottom-container">
          <div className="bottom-container__left">
            <TotalIncome></TotalIncome>
            <DonationsHistory></DonationsHistory>
            <DonationsHistory></DonationsHistory>
          </div>
          <div className="bottom-container__right">
            <MaaserBalance></MaaserBalance>
            <DonationsByCategory></DonationsByCategory>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

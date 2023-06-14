import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import TotalIncome from "./Components/TotalIncome";
import DonationsHistory from "./Components/DonationsHistory";
import MaaserBalance from "./Components/MaaserBalance";
import DonationsByCategory from "./Components/DonationsByCategory";
import { useState } from "react";

function App() {
  const [DonationHistory, UpdateDonationsHistory] = useState([
    {
      key: 1,
      id: "Yad Eliezer",
      company: "Yad Eliezer",
      date: " Jan 01,2023",
      amount: "$2,000.00",
      comment: "Helping the Poor",
    },
    {
      key: 2,
      id: "Kollel Kever Rochel",
      company: "Kollel Kever Rochel",
      date: " Jan 04,2022",
      amount: "$2,000.00",
      comment: "Torah Institutions",
    },
    {
      key: 3,
      id: "Likrat Kallah",
      company: "Likrat Kallah",
      date: " Jan 06,2023",
      amount: "$2,000.00",
      comment: "Hachnasas Kallah",
    },
  ]);

  const [IncomeHistory, UpdateIncomeHistory] = useState([
    {
      key: 1,
      id: "Compuskills",
      company: "Compuskills",
      date: " Jan 01,2023",
      amount: "$2,000.00",
      comment: "Yes",
    },
    {
      key: 2,
      id: "Ner Tzaddik",
      company: "Ner Tzaddik",
      date: " Jan 04,2022",
      amount: "$2,000.00",
      comment: "No",
    },
    {
      key: 3,
      id: "4ugifts",
      company: "4ugifts",
      date: " Jan 06,2023",
      amount: "$2,000.00",
      comment: "No",
    },
  ]);
  console.log(IncomeHistory);
  console.log(DonationHistory);

  function UpdateDonations(obj) {
    UpdateDonationsHistory(function (prev) {
      return [...prev, obj];
    });
  }

  function UpdateIncome(obj) {
    UpdateIncomeHistory(function (prev) {
      return [...prev, obj];
    });
  }

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
            <DonationsHistory
              history={DonationHistory}
              title={"Donations History"}
              title1={"Donations"}
              title2={"Category"}
            ></DonationsHistory>
            <DonationsHistory
              history={IncomeHistory}
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
      </div>
    </div>
  );
}

export default App;

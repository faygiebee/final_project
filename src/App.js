import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import InboxPage from "./Components/InboxPage";
import SettingsPage from "./SettingsPage";
import DonationsPage from "./Components/DonationsPage";
import IncomePage from "./Components/IncomePage";
import LogOutPage from "./Components/LogOutPage";

function App() {
  const [page, updatePage] = useState();

  let pageToReturn;

  function UpdatePage(page) {
    updatePage(page);
  }
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
  switch (page) {
    case "Inbox":
      pageToReturn = <InboxPage></InboxPage>;
      break;
    case "Donations":
      pageToReturn = <DonationsPage  donationHistory={DonationHistory} donation={UpdateDonations}></DonationsPage>;
      break;

    case "Income":
      pageToReturn = <IncomePage 
      incomeHistory={IncomeHistory} income={UpdateIncome}></IncomePage>;
      break;

    case "Settings":
      pageToReturn = <SettingsPage></SettingsPage>;
      break;

    case "Logout":
      pageToReturn = <LogOutPage></LogOutPage>;
      break;

    default:
      pageToReturn = (
        <Dashboard
          incomeHistory={IncomeHistory}
          donationHistory={DonationHistory}
        ></Dashboard>
      );
      break;
  }
  

  return (
    <div className="container">
      <SideBar page={UpdatePage}></SideBar>
      <div className="main-content">
        <div className=""></div>
        <Header></Header>
        {pageToReturn}
      </div>
    </div>
  );
}

export default App;
/*
       
        }}*/

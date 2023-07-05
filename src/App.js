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
  const [page, updatePage] = useState("Dashboard");

  let pageToReturn;

  function UpdatePage(page) {
    updatePage(page);
  }
  const [DonationHistory, UpdateDonationsHistory] = useState([
    {
      key: 1,
      id: 1,
      company: "Yad Eliezer",
      date: "2023-01-01",
      amount: 2000,
      comment: "Helping the Poor",
    },
    {
      key: 2,
      id: 2,
      company: "Kollel Kever Rochel",
      date: "2022-01-04",
      amount: 2000,
      comment: "Torah Institutions",
    },
    {
      key: 3,
      id: 3,
      company: "Likrat Kallah",
      date: "2023-01-06",
      amount: 2000,
      comment: "Hachnasas Kallah",
    },
  ]);

  const [IncomeHistory, UpdateIncomeHistory] = useState([
    {
      key: 1,
      id: 1,
      company: "Compuskills",
      date: "2023-01-01",
      amount: 2000,
      comment: "Yes",
    },
    {
      key: 2,
      id: 2,
      company: "Ner Tzaddik",
      date: "2022-01-04",
      amount: 2000,
      comment: "No",
    },
    {
      key: 3,
      id: 3,
      company: "4ugifts",
      date: "2023-06-01",
      amount: 2000,
      comment: "No",
    },
  ]);

  function DeleteDonation(obj){
    UpdateDonationsHistory(function (prev) {
      return prev.filter(function(value){return value.id!==obj});})
  }
 //Delete Income//
  function DeleteDonation(obj){
    UpdateIncomeHistory(function (prev) {
      return prev.filter(function(value){return value.id!==obj});})
  }
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
      pageToReturn = (
        <DonationsPage
          donationHistory={DonationHistory}
          donation={UpdateDonations}
          page={page}
        DeleteDonation={DeleteDonation}
        ></DonationsPage>
      );
      break;

    case "Income":
      pageToReturn = (
        <IncomePage
          incomeHistory={IncomeHistory}
          income={UpdateIncome}
          page={page}
          donation={DonationHistory}
          deleteDonation={DeleteDonation}
        ></IncomePage>
      );

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
          page={page}
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

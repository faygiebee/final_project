import { useRef } from "react";
import "./Form.css";
import Button from "./Button";

function EditForm(props) {
  let page=props.page;
  const company = useRef();
  const Date = useRef();
  const Amount = useRef();
  const Maaser = useRef();
  const Submit = useRef();
  let newIncome;
  let Key = useRef(4);
  let item=props.Object;
  console.log(page);
  let comp=item.company;
console.log("In edit form");
  function CompanyHandler(e) {/*
    
    company.current = e.target.value;
    console.log(company);*/
  }
  function DateHandler(e) {
    Date.current = e.target.value;
    console.log(Date);
  }

  function AmountHandler(e) {
    Amount.current = e.target.value;
    console.log(Amount);  }
    
  function MaaserHandler(e) {
    console.log("Maaser" + typeof e.target.value);
    e.target.value = "on" ? (Maaser.current == "Yes") : (Maaser.current == "No");
    console.log(Maaser);
  }

  function IncomeSubmitHandler(e) {
    e.preventDefault();
    Key.current++;
    newIncome = {
      key: Key.current,
      id:Key.current,
      company: company.current,
      date: Date.current,
      amount: Amount.current,
      comment: Maaser.current,
    };
    //props.income(newIncome);
    console.log("newIncome" + newIncome.company);
  }
  function DonationSubmitHandler(e) {
    e.preventDefault();
    item = {
      key:item.key,
      id:item.key,
      company:company.current,
      date: Date.current,
      amount: Amount.current,
      comment: Maaser.current,
    };
    
    props.donation(item);
    props.DeleteDonation(item.id);
    console.log("newIncome" + newIncome.company);
  }
  
  return (
    <>
      <form className="box" action="" method="" name="">
      <div className="formRow"><label forhtml="company">Edit Transaction</label>
        <input className="formInput" value={comp} onChange={CompanyHandler} type="text" name="company"></input></div>
        <div className="formRow"> <label forhtml="Date">Date Received</label>
        <input className="formInput" value={item.date} onChange={DateHandler} type="date" name="Date"></input></div>
        <div className="formRow"><label forhtml="Amount">Amount Received</label>
        <input className="formInput" value={item.amount}onChange={AmountHandler} type="number" name="Amount"></input></div>
        <div className="exempt"><div className=""><label forhtml="Maaser">Exempt from Maaser</label></div>
        <input className="formInput" value={item.comment} onChange={MaaserHandler} type="checkbox" name="Maaser"></input></div>
        {page=="Donations"&& <input type="select"></input>}
        <label forhtml="Submit"></label>
        <div className=""> <input className= " btn btn-white" onClick={page=="Income"? IncomeSubmitHandler:DonationSubmitHandler} type="submit" name="Submit"></input>
        </div> </form>
    </>
  );
}

export default EditForm;

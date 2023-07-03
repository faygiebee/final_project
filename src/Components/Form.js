import { useRef } from "react";
import "./Form.css";
import Button from "./Button";

function Form(props) {
  let page=props.page;
  const Income = useRef();
  const Date = useRef();
  const Amount = useRef();
  const Maaser = useRef();
  const Submit = useRef();
  let newIncome;
  let Key = useRef(4);
  console.log("ini Form");
  console.log(page);

  function CompanyHandler(e) {
    Income.current = e.target.value;
    console.log(Income);
  }
  function DateHandler(e) {
    Date.current = e.target.value;
    console.log(Date);
  }
  function AmountHandler(e) {
    Amount.current = e.target.value;
    console.log(Amount);
  }
  function MaaserHandler(e) {
    console.log("Maaser" + typeof e.target.value);
    e.target.value == "on" ? (Maaser.current = "Yes") : (Maaser.current = "No");
    console.log(Maaser);
  }

  function IncomeSubmitHandler(e) {
    e.preventDefault();
    Key.current++;
    newIncome = {
      key: Key.current,
      id:Key.current,
      company: Income.current,
      date: Date.current,
      amount: Amount.current,
      comment: Maaser.current,
    };
    props.income(newIncome);
    console.log("newIncome" + newIncome.company);
  }
  function DonationSubmitHandler(e) {
    e.preventDefault();
    console.log(e);
    Key.current++;
    newIncome = {
      key: Key.current,
      id:Key.current,
      company: Income.current,
      date: Date.current,
      amount: Amount.current,
      comment: Maaser.current,
    };
    props.donation(newIncome);
    console.log("newIncome" + newIncome.company);
  }
  
  return (
    <>
      <form className="box" action="" method="" name="">
      <div className="formRow"><label forhtml="Income">Money received from</label>
        <input className="formInput"  onChange={CompanyHandler} type="text" name="Income"></input></div>
        <div className="formRow"> <label forhtml="Date">Date Received</label>
        <input className="formInput" onChange={DateHandler} type="date" name="Date"></input></div>
        <div className="formRow"><label forhtml="Amount">Amount Received</label>
        <input className="formInput" onChange={AmountHandler} type="number" name="Amount"></input></div>
        <div className="exempt"><div className=""><label forhtml="Maaser">Exempt from Maaser</label></div>
        <input className="formInput"  onChange={MaaserHandler} type="checkbox" name="Maaser"></input></div>
        {page=="Donations"&& <input type="select"></input>}
        <label forhtml="Submit"></label>
        <div className=""> <input className= " btn btn-white" onClick={page=="Income"? IncomeSubmitHandler:DonationSubmitHandler} type="submit" name="Submit"></input>
        </div> </form>
    </>
  );
}

export default Form;

import { useRef } from "react";
import "./Form.css";
import Button from "./Button";

function Form(props) {
  const Income = useRef();
  const Date = useRef();
  const Amount = useRef();
  const Maaser = useRef();
  const Submit = useRef();
  let newIncome;
  let Key = useRef(4);

  function IncomeHandler(e) {
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

  function SubmitHandler(e) {
    e.preventDefault();
    Key.current++;
    newIncome = {
      key: Key.current,
      company: Income.current,
      date: Date.current,
      amount: Amount.current,
      comment: Maaser.current,
    };
    props.income(newIncome);
    console.log("newIncome" + newIncome.company);
  }
  function CancelHandler(e){
    
  }
  return (
    <>
      <form className="box" action="" method="" name="">
      <div className="formRow"><label forhtml="Income">Money received from</label>
        <input className="formInput"  onChange={IncomeHandler} type="text" name="Income"></input></div>
        <div className="formRow"> <label forhtml="Date">Date Received</label>
        <input className="formInput" onChange={DateHandler} type="date" name="Date"></input></div>
        <div className="formRow"><label forhtml="Amount">Amount Received</label>
        <input className="formInput" onChange={AmountHandler} type="number" name="Amount"></input></div>
        <div className="exempt"><div className=""><label forhtml="Maaser">Exempt from Maaser</label></div>
        <input className="formInput"  onChange={MaaserHandler} type="checkbox" name="Maaser"></input></div>
        <label forhtml="Submit"></label>
        <div className="space"> <input className= " btn btn-white" onClick={SubmitHandler} type="submit" name="Submit"></input>
        <label forhtml="Cancel"></label>
        <input className= " btn btn-white" onClick={CancelHandler} value="Cancel" type="button" name="Cancel"></input></div>
      </form>
    </>
  );
}

export default Form;

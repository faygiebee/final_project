import { useRef } from "react";

function DonationsForm(props) {
  const Income = useRef(11);
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
    e.target.value=="on"? Maaser.current = "Yes":Maaser.current="No";
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
  return (
    <>
      <form className="box main-content" action="" method="" name="">
        <label forhtml="Income">Money Donated To</label>
        <input onChange={IncomeHandler} type="text" name="Income"></input>
        <label forhtml="Date">Date of Donation</label>
        <input onChange={DateHandler} type="date" name="Date"></input>
        <label forhtml="Amount">Amount Donated</label>
        <input onChange={AmountHandler} type="number" name="Amount"></input>
        <label forhtml="Category">Donation Category</label>
        <input onChange={MaaserHandler} type="select" name="Maaser"></input>
        <label forhtml="Submit">Submit</label>
        <input onClick={SubmitHandler} type="submit" name="Submit"></input>
      </form>
    </>
  );
}

export default DonationsForm;

import "./TotalIncome.css";
import IncomeSection from "./IncomeSection";
import Card from "./Card";

function TotalIncome() {
  return (
    <div className="box total-box">
      <p>
        <IncomeSection className="total-box__left"></IncomeSection>  </p>
       <p> <IncomeSection className="total-box__right"></IncomeSection></p>
      
    </div>
  );
}

export default TotalIncome;

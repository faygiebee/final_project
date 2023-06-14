import "./TotalIncome.css";
import IncomeSection from "./IncomeSection";
import Card from "./Card";

function TotalIncome() {
  return (
    <div className="box total-box">
      <div className="total-box__left">
        <IncomeSection
          commentClass={"percentage-increase"}
          comment={"20%"}
          amount={"$583,530.00"}
          title={"Total Income"}
        ></IncomeSection>
      </div>
      <div className="total-box__right">
        <IncomeSection
          commentClass={"percentage-decrease"}
          comment={"10%"}
          amount={"$50,530.00"}
          title={"Total Donations"}
        ></IncomeSection>
      </div>
    </div>
  );
}

export default TotalIncome;

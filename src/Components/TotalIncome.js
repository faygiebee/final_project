import "./TotalIncome.css";
import IncomeSection from "./IncomeSection";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

function TotalIncome(props) {
  return (
    <div className="box total-box">
      <div className="total-box__left">
        <IncomeSection
          commentClass={"percentage-increase"}
          comment={"20%"}
          amount={props.incomeHistory}
          title={"Total Income"}
          icon={faDollarSign}
        ></IncomeSection>
      </div>
      <div className="total-box__right">
        <IncomeSection
          commentClass={"percentage-decrease"}
          comment={"10%"}
          amount={props.donationHistory}
          title={"Total Donations"}
          icon={faCircleDollarToSlot}
        ></IncomeSection>
      </div>
    </div>
  );
}

export default TotalIncome;

import "./DonationsByCategory.css";
import Card from "./Card";
import SubTitle from "./SubTitle";
import Amount from "./Amount";
import DonationsList from "./DonationsList";
import PieChart from "./PieChart";

function DonationsByCategory() {
  return (
    <div className="spending-box">
      <Card>
        <SubTitle></SubTitle>
        <PieChart></PieChart>
        <div class="overall-spending">
          <h4>Overall</h4>
          <Amount>{amount}</Amount>
        </div>
        <div class="pie-chart__labels">
          <DonationsList></DonationsList>
        </div>
      </Card>
    </div>
  );
}

export default DonationsByCategory;

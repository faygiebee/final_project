import "./DonationsByCategory.css";
import Card from "./Card";
import SubTitle from "./SubTitle";
import Amount from "./Amount";
import DonationsList from "./DonationsList";
import PieChart from "./PieChart";

function DonationsByCategory() {
  const donations = [
    { charity: "Hachnasas Kallah", number: "$8000.00" },
    { charity: "Helping the poor", number: "$2130.00" },
    { charity: "Medical Institutions", number: "$1510.00" },
    { charity: "Torah Institutions", number: "$2245.00" }

  ];
  return (
    <div className="box spending-box">
      <div>
        <SubTitle title={"Donations by category"}></SubTitle>
        <PieChart></PieChart>
        <div class="overall-spending">
          <h4>Overall</h4>
          <Amount isPie={true} amount={"$583,530.00"}></Amount>
        </div>
        <div class="pie-chart__labels">
          <DonationsList donations={donations}></DonationsList>
        </div>
      </div>
    </div>
  );
}

export default DonationsByCategory;

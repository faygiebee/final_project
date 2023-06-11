import "./DonationsByCategory.css";
import Card from "./Card";
import SubTitle from "./SubTitle";
import Amount from "./Amount";

function DonationsByCategory() {
  return (
    <div className="box spending-box">
      <Card>
        <SubTitle></SubTitle>
        <div class="overall-spending">
          <h4>Overall</h4>
          <Amount>{amount}</Amount>
        </div>
        <div class="pie-chart__labels">
                <div class="pie-chart__labels-item">
                  <div class="label">
                    <div class="label__color first"></div>
                    Hachnasas Kallah
                  </div>
                  $8.000.00
                </div>
                <div class="pie-chart__labels-item">
                  <div class="label">
                    <div class="label__color second"></div>
                    Helping the Poor
                  </div>
                  $2.130.00
                </div>
                <div class="pie-chart__labels-item">
                  <div class="label">
                    <div class="label__color third"></div>
                    Medical Institutions
                  </div>
                  $1.510.00
                </div>
                <div class="pie-chart__labels-item">
                  <div class="label">
                    <div class="label__color fourth"></div>
                    Torah Institutions
                  </div>
                  $2.245.00
                </div>
                
              </div>
      </Card>
    </div>
  );
}

export default DonationsByCategory;

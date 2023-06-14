import BulletPoint from "./BulletPoint";
import "./DonationsListItem.css";
import NumSmall from "./NumSmall";

function DonationsListItem(props) {
 
  return (
    <div className="pie-chart__labels-item">
      <div class="label">
      <BulletPoint class={props.charity}></BulletPoint>
        <div class={"label__color second"}> </div>
        <p>{props.charity}</p>
      </div>
      <NumSmall amount={props.amount}></NumSmall>
    </div>
  );
}

export default DonationsListItem;

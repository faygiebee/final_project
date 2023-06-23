import BulletPoint from "./BulletPoint";
import "./DonationsListItem.css";
import NumSmall from "./NumSmall";

function DonationsListItem(props) {
  return (
    <div className="pie-chart__labels-item">
      <div class="label">
        <BulletPoint class={props.charity}></BulletPoint>
        <p>{props.charity}</p>
      </div>
      <NumSmall number={props.number}></NumSmall>
    </div>
  );
}

export default DonationsListItem;

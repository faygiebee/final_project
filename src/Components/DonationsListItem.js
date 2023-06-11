import BulletPoint from "./BulletPoint";
import "./DonationsListItem.css";
import NumSmall from "./NumSmall";

function DonationsListItem() {
  return (
    <div className={"className"}>
      <BulletPoint className={"label__color second"}></BulletPoint>
      <div class="label">
        <div class="label__color second"></div>
        <p>{category}</p>
      </div>
      <NumSmall></NumSmall>
    </div>
  );
}

export default DonationsListItem;

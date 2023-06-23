import "./PurpleButton.css";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

function PurpleButton() {
  return (
    <button class="btn btn-purple">
      <FontAwesomeIcon icon={faCircleDollarToSlot} />
      <span>Donate</span>
    </button>
  );
}

export default PurpleButton;

import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon(props) {
  return <FontAwesomeIcon icon={props.icon} />;
}
export default Icon;

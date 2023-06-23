import DropDown from "./DropDown";
import SubTitle from "./SubTitle";
import "./User.css";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <div className="user-nav">
      <div className="user-info">
        <Icon icon={faUser}></Icon>
        <span className="user-name">Faygiebee</span>
        <Icon icon={faRightFromBracket}></Icon>
        <span>Log Out</span>
      </div>
      <DropDown></DropDown>
    </div>
  );
}

export default User;

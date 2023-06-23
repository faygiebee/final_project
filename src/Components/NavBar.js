import Icon from "./Icon";
import "./NavBar.css";

function NavBar(props) {
const arr= props.button;
function ClickHandler(){
  props.page(props.name);
}
  return (
    <li onClick={ClickHandler}class="side-nav__item {side-nav__item-active}">
      <Icon icon={props.icon}></Icon>
      <span>{props.name}</span>
    </li>
  );
}

export default NavBar;

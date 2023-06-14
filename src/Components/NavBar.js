import Icon from "./Icon";
import "./NavBar.css";

function NavBar(props) {
const arr= props.button;
 
  return (
    <li class="side-nav__item {side-nav__item-active}">
      <Icon></Icon>
      <span>{props.button}</span>
    </li>
  );
}

export default NavBar;

import Icon from "./Icon";
import "./NavBar.css";

function NavBar() {
  return (
    <li class="side-nav__item {side-nav__item-active}">
      <Icon></Icon>
      <span>{ButtonTitle}</span>
    </li>
  );
}

export default NavBar;

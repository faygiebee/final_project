import NavBar from "./NavBar";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SideBar(props) {
  const navButton = [
    {name:"Dashboard",icon:faHouse },
    {name:"Income",icon:faArrowUpRightDots},
    {name:"Donations",icon:faCircleDollarToSlot},
    {name:"Inbox",icon:faComment},
    {name:"Settings",icon:faGear},
    {name:"Logout",icon:faRightFromBracket}
  ];
  
  return (
    <nav className="sidebar">
      <div>
        <div className="sidebar__logo">
          <h2 className="sidebar__logo-header">The Ma'aser App</h2>
        </div>

        <ul className="side-nav">
          {navButton.map(function (button) {
            return <NavBar page={props.page} icon ={button.icon} name={button.name}></NavBar>;
          })}
        </ul>
        <ul>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;

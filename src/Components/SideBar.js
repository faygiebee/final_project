import NavBar from "./NavBar";
import "./SideBar.css";

function SideBar() {
  const navButton = [
    "Dashboard",
    "Income",
    "Donations",
    "Inbox",
    "Settings",
    "Logout",
  ];
  
  return (
    <nav className="sidebar">
      <div>
        <div className="sidebar__logo">
          <h2 className="sidebar__logo-header">The Ma'aser App</h2>
        </div>

        <ul className="side-nav">
          {navButton.map(function (button) {
            return <NavBar button={button}></NavBar>;
          })}
        </ul>
        <ul>
          <NavBar className='last-item"'></NavBar>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;

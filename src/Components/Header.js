import "./Header.css";
import User from "./User";

function Header() {
  return (
    <>
      <div className="date"></div>
      <div className="top-container">
        <div className="" dates="">
          <form className="dates">
            For Dates Between:
            <input type="date" value="2023-01-01" required="required" />
            <input type="date" value="2023-01-01" required="required" />
            <button class="btn-purple submit-btn">Go</button>
          </form>
        </div>
        <User></User>
      </div>
    </>
  );
}

export default Header;

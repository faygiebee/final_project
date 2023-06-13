import "./Header.css";
import User from "./User";

function Header() {
  return (
    <>
      <div class="top-container">
          <div class="" dates="">
            <form class="dates">
              For Dates Between:
              <input type="date" value="2023-01-01" required="required"/>
              <input type="date" value="2023-01-01" required="required"/>
              <button class="btn-purple submit-btn">Go</button>
            </form>
          </div>

        <div action="#" class="search">
            <svg
              class="search__icon"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5418 19.25C15.3513 19.25 19.2502 15.3512 19.2502 10.5417C19.2502 5.73223 15.3513 1.83337 10.5418 1.83337C5.73235 1.83337 1.8335 5.73223 1.8335 10.5417C1.8335 15.3512 5.73235 19.25 10.5418 19.25Z"
                stroke="#596780"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.1668 20.1667L18.3335 18.3334"
                stroke="#596780"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              class="search__input"
              placeholder="Search something here"
            /> 
          </div>
          <div class="user-nav">
            <div class="user-info">
              <svg class="user-image" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" fill-opacity="0.01"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0321 19C8.67459 19 6.80643 17.2316 6.80643 14V13H17.1158L17.1434 13.9715C17.2358 17.2145 15.4003 19 12.0321 19ZM15.0875 15C14.8526 16.3955 13.9089 17 12.0321 17C10.1563 17 9.18179 16.3902 8.89677 15H15.0875ZM14 8H17V10H14V8ZM10 8H7V10H10V8Z" fill="black"></path>
              </svg>
              <span class="user-name">Leora Waldman</span>

              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.8999 8.05999C9.2099 4.45999 11.0599 2.98999 15.1099 2.98999H15.2399C19.7099 2.98999 21.4999 4.77999 21.4999 9.24999V15.77C21.4999 20.24 19.7099 22.03 15.2399 22.03H15.1099C11.0899 22.03 9.2399 20.58 8.9099 17.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M15.0001 12.5H3.62012" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.85 9.14999L2.5 12.5L5.85 15.85" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Log Out</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
    </>
  );
}

export default Header;

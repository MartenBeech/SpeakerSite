import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png"></img>
          </div>
          <div className="light">
            <h4
              className={
                theme === "light"
                  ? "header-title text-dark"
                  : "header-title text-light"
              }
            >
              Silicon Valley Code Camp
            </h4>
          </div>
          <div className={theme === "light" ? "text-dark" : "text-light"}>
            Hello Mr. Bech &nbsp;&nbsp;
            <span>
              <a href="#">sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

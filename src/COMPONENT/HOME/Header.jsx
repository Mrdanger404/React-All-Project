import { NavLink } from "react-router-dom";
import logo from "../IMAGE/logo.jpg";
import "../CSS/HOME/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="search hare..."
            className="inputSearch"
          />
          <button>Search</button>
        </div>
        <div className="authBtn">
          <button>
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </button>
          <button>
            <NavLink to="/signup" className="link">
              SignUp
            </NavLink>
          </button>
        </div>
      </div>
      <div className="category">
        <div className="menu">
          <ul>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Bike</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <NavLink to="/honda" className="link">
                      Honda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pulsure" className="link">
                      Pulsure
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Laptop</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <NavLink to="/msi" className="link">
                      Msi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hp" className="link">
                      Hp
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Mobile</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <NavLink to="/iphone" className="link">
                      Iphone
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/itel" className="link">
                      Itel
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/cart" className="link">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

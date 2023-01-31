import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [navOpen, set_navOpen] = useState(false);

  const navToggle = () => set_navOpen(!navOpen);

  return (
    <div>
      <div className="navbar">
        <div className="left">
          <h1
            style={{
              color: "purple",
              fontWeight: "400",
            }}
          >
            Arif Billah
          </h1>
        </div>
        <div className={navOpen ? "navToggle nav" : "nav"}>
          <NavLink to="/" className="navLink" onClick={navToggle}>
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </NavLink>

          {/*  */}
          <NavLink to="/a" className="navLink" onClick={navToggle}>
            <i class="fa-solid fa-address-card"></i>
            <span>About</span>
          </NavLink>
          {/*  */}
          <NavLink to="/b" className="navLink" onClick={navToggle}>
            <i class="fa-regular fa-address-card"></i>
            <span>My Work</span>
          </NavLink>
          {/*  */}
          <NavLink to="/c" className="navLink" onClick={navToggle}>
            <i class="fa-solid fa-house"></i>
            <span>Contact</span>
          </NavLink>
          {/*  */}
          <NavLink to="/d" className="navLink" onClick={navToggle}>
            <i class="fa-solid fa-house"></i>
            <span>Help</span>
          </NavLink>
        </div>
        <div className="right">
          {!navOpen && (
            <div className="menu" onClick={navToggle}>
              <i class="fa-solid fa-bars"></i>
            </div>
          )}
          {navOpen && (
            <div className="close" onClick={navToggle}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
/// /// /// /// ///
export default Navbar;

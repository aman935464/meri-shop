import React, { useState } from "react";
import {
  Languages,
  ShoppingCart,
  UserRoundPen,
  MoonIcon,
  SunDim,
  Home,
} from "lucide-react";
import { useThemeProvider } from "../store/useThemeProvider";
import { Link, NavLink } from "react-router-dom";
import Menuicon from "./MobileNavigation";

function Rightnav() {
  const { theme, toggleTheme } = useThemeProvider();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Menuicon open={open} setOpen={setOpen} />
      <div className={`menuItems ${open ? "active" : ""}`}>
        <button className="Icon" aria-label="home product">
          <Link to="/" className="link">
            <Home size={24} />
          </Link>
        </button>
        <button className="Icon" id="themeIcon" onClick={toggleTheme}>
          {theme === "light" ? <SunDim /> : <MoonIcon />}
        </button>
        <button className="Icon" id="languageIcon" aria-label="change languge">
          <Languages size={24} />
        </button>
        <button className="Icon" aria-label="user profile">
          <NavLink
            to="/profile"
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            <UserRoundPen size={24} />
          </NavLink>
        </button>
        <button className="Icon" aria-label="shopping cart">
          <Link to="/cart" className="link">
            <ShoppingCart size={24} />
          </Link>
        </button>
      </div>
    </>
  );
}

export default Rightnav;

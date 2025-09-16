import { NavLink } from "react-router-dom";
import logo_O from "../assets/logo_O.png";
import "../style/_header.scss";

function Header() {
  return (
    <header className="header">                                                     
      <img
        src={logo_O}
        alt="Kasa"
        className="header_img"
      />
      <nav className="header_nav">
        <NavLink to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >Accueil</NavLink>

        <NavLink to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;

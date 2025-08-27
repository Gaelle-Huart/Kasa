/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// Header du site /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

import { NavLink } from "react-router-dom";
import logo_O from "../../assets/logo_O.png";
import "./_header.scss";

function Header() {                                                                     /// /// création du composant de fonction header
  return (
    <header className="header">                                                     
      <img
      src={logo_O}
      alt="Logo de Kasa"
      className="header_img"
      />
      <nav className="header_nav">
        <NavLink to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >Accueil</NavLink>

        <NavLink to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >A Propos</NavLink>
      </nav>

    </header>
  );
}

export default Header;
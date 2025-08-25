/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// Header du site /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

import { NavLink } from 'react-router';
import logo from '../../assets/logo_O.png';
import './_header.scss';

/// /// création du composant de fonction header
function Header() {
  return (
    /// /// création de l'élément principal et de sa classe attitrée
    <header className="header">
      <img
        src={logo}
        alt="Logo de Kasa"
        className="header__img"
      />

      {/*** création de la navigation ***/}
      <nav className="header__nav">
        {/*** page d'accueil ***/}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        {/*** page à propos ***/}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A Propos
        </NavLink>
      </nav>

    </header>
  );
}

export default Header;
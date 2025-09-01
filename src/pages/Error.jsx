import Er404 from "../assets/404.png";
import { NavLink } from "react-router-dom";
import "../style/_error.scss";

/** Fonction affichant la page 404
 * @return génère les éléments html de la page 
 */
function Error() {
  return (
    <main className="error">
      <img src={Er404} alt="Erreur 404" />
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  );
}


export default Error;
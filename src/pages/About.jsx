import Cover from "../components/Cover.jsx";
import ArrowUp from "../assets/arrow_up.png";

import "../style/_about.scss";
import "../style/_detail.scss";

/** Fonction permettant l'affichage de la page about
 * @return injecte le html en utilisant des balises sémantiques
 */
export function About() {
  return (
    <main className="about">
      <Cover page="about" txt="" />
      <section className="about__section">
        <details className="detail">
          <summary className="detail__title">
            Fiabilité
            <img src={ArrowUp} alt="" className="chevron" />
          </summary>
          <p className="detail__content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </details>
        <details className="detail">
          <summary className="detail__title">
            Respect
            <img src={ArrowUp} alt="" className="chevron" />
          </summary>
          <p className="detail__content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </details>
        <details className="detail">
          <summary className="detail__title">
            Service
            <img src={ArrowUp} alt="" className="chevron" />
          </summary>
          <p className="detail__content">La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </details>
        <details className="detail">
          <summary className="detail__title">
            Sécurité
            <img src={ArrowUp} alt="" className="chevron" />
          </summary>
          <p className="detail__content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </details>
      </section>
    </main>
  )
}

export default About;

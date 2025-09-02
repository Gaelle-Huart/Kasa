import Cover from "../components/Cover.jsx";
import Detail from "../components/Detail.jsx";
import "../style/_about.scss";

/** Fonction de la page about
 * @return injecte le html en utilisant des balises main et section
 */
export function About() {
  return (
    <main className="about">
      <Cover page="about" txt="" />
      <section className="about__section">
        <Detail title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Detail>
        <Detail title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Detail>
        <Detail title="Service">
          La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
        </Detail>
        <Detail title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </Detail>
      </section>
    </main>
  )
}

export default About;
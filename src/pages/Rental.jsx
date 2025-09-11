import { useParams } from "react-router-dom";
import Error from "./Error.jsx";
import RentData from "../rawdata/logements.json";
import Slides from "../components/Slides.jsx";
import Rating from "../components/Rating.jsx";
import Tag from "../components/Tag.jsx";
import ArrowUp from "../assets/arrow_up.png";

import "../style/_rental.scss";
import "../style/_detail.scss";

/** fonction qui gère le contenu de la page rental (locations)
 * @if ici permet de retourner la page error si aucune donnée de location n'est trouvée
 * @returns injecte les balises (sémantiques de préférence) nécessaires à la page
 * @Slides est un composant qui gère les slides (images de la location)
 * @Tag est une composant qui gère les tags
 * @Rating est un composant qui gère les notes
 */
function Rental() {
  const {id} = useParams()
  const rent = RentData.find((rent) => String(rent.id) === id)
  if(!rent) {
    return <Error />
  } else {
    return (
      <main className="rent">
        <Slides />
        <section className="rent__container">
          <div className="rent__container_info">
            <div>
              <h2>{rent.title}</h2>
              <p>{rent.location}</p>
            </div>
            <Tag tags={rent.tags}/>
          </div>
          <div className="rent__container_host">
            <div className="host_info">
              <p>{rent.host.name}</p>
              <img src={rent.host.picture} alt="" />
            </div>
            <Rating rating={rent.rating}/>
          </div>
        </section>
        <section className="rent__detail">
          <details className="detail">
            <summary className="detail__title is-rounder is-smaller">
              Description
              <img src={ArrowUp} alt="" className="chevron" />
            </summary>
            <p className="detail__content">{rent.description}</p>
          </details>
          <details className="detail">
            <summary className="detail__title is-rounder is-smaller">
              Equipements
              <img src={ArrowUp} alt="" className="chevron" />
            </summary>
            <ul className="detail__content">
              {rent.equipments.map((item, index) => (
              <li key={index}>{item}</li>))}
            </ul>
          </details>
        </section>
      </main>
    )
  }
}
export default Rental;
import { useParams } from "react-router-dom";
import Error from "./Error.jsx";
import RentData from "../rawdata/logements.json";
import Slides from "../components/Slides.jsx";
import Rating from "../components/Rating.jsx";
import Tag from "../components/Tag.jsx";
import ArrowUp from "../assets/arrow_up.png";

import "../style/_rental.scss";
import "../style/_detail.scss";
import Detail from "../components/Detail.jsx";

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
        <Slides pictures={rent.pictures} title={rent.title}/>
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
          <Detail title="Description" page="rental">
            {rent.description}
          </Detail>
          <Detail title="Equipements" page="rental">
            {rent.equipments.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Detail>
        </section>
      </main>
    )
  }
}
export default Rental;
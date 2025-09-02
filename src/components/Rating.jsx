import { useParams } from "react-router-dom";
import RentData from "../rawdata/logements.json";
import OrStar from "../assets/star_active.png";
import GreyStar from "../assets/star_inactive.png";
import "../style/_rating.scss";

/** Fonction qui gère la notation des logements proposés à la location
 * @const(s) les constantes permettent de récupérer les infos et de les traiter
 * @starRate tableau de longueur max ayant comme indice (i) pour chaque itération
 * @img si l'indice (i) est inférieur à la note => étoile orange, sinon grise
 * @return injecte la note dans une span
 */
function Rating() {
  const {id} = useParams()
  const rent = RentData.find((rent) => rent.id === id)
  const rating = rent.rating
  const max = 5
  const starRate = Array.from({length: max}, (_,i) => (
    <img key={i} 
      src={i < rating ? OrStar : GreyStar}
      alt={i < rating ? "Etoile orange" : "Etoile grise"}
    />
  ))
  return (
    <span className="rating">
      {starRate}
    </span>
  )
}
export default Rating;
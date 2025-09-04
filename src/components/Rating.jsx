import OrStar from "../assets/star_active.png";
import GreyStar from "../assets/star_inactive.png";
import "../style/_rating.scss";

/** Fonction qui gère la notation des logements proposés à la location
 * @Array (5) entre [] crée un tableau de 5 vide, ... (spread) permet de le rendre exploitable (undifined x 5)
 * @img si l'indice (i) est inférieur à la note (rating) => étoile orange, sinon grise
 * @return injecte la note dans une span
 */
function Rating({rating}) {
  return (
    <span className="rating">
      {[...Array(5)].map((_, i) => (
        <img key={i} 
          src={i < rating ? OrStar : GreyStar}
          alt={i < rating ? "Etoile orange" : "Etoile grise"}
        />
      ))}
    </span>
  )
}
export default Rating;
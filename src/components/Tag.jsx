import { useParams } from "react-router-dom";
import RentData from "../rawdata/logements.json";
import "../style/_tag.scss";

function Tag() {
  const { id } = useParams()
  const rent = RentData.find((rent) => rent.id === id)
  return (
    <div className="tag">
      <ul className="tag__container">
        {rent.tags.map((tag, index) => (
          <li key={index} className="tag__container_item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
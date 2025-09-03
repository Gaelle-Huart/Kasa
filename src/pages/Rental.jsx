import { useParams } from "react-router-dom";
import Error from "./Error.jsx";
import RentData from "../rawdata/logements.json";
import Slides from "../components/Slides.jsx";
import Rating from "../components/Rating.jsx";
import Detail from "../components/Detail.jsx";
import Tag from "../components/Tag.jsx";

import "../style/_rental.scss";

function Rental() {
  const {id} = useParams()
  const rent = RentData.find((rent) => rent.id === id)
  if(!rent) {
    return <Error />
  } else {
    return (
      <main className="gallery">
        <Slides />
        <section className="gallery__container">
          <div className="gallery__container_info">
            <div>
              <h2>{rent.title}</h2>
              <p>{rent.location}</p>
            </div>
            <Tag />
          </div>
          <div className="gallery__container_host">
            <div className="host_info">
              <p>{rent.host.name}</p>
              <img src={rent.host.picture} alt="" />
            </div>
            <Rating />
          </div>
        </section>
        <section className="gallery__detail">
          <Detail
            page="rental"
            className="detail"
            title="Description"
            content={rent.description}
          />
          <Detail
            page="rental"
            className="detail"
            title="Equipements"
            content= {
              <ul>
                {rent.equipments.map((equipments, index) => (
                  <li key={index}>{equipments}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    )
  }
}
export default Rental;
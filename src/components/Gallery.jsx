import { Link } from "react-router-dom";
import RentData from "../rawdata/logements.json";
import "../style/_gallery.scss";

function Gallery() {
  const index = location.pathname === "/"
  return (
    <section className="gallery">
      <div className="gallery__cards">
        {RentData.map((rent) => (
          <div key={rent.id} className="gallery__cards_item">
            <Link to={'/rental/' + rent.id} className="gallery__cards_item_link">
              <div className="container">
                <img src={rent.cover} alt={rent.title} className="container__img" />
                {index && <div className="container__dusk"></div>}
              </div>
              <h2 className="title">{rent.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Gallery;
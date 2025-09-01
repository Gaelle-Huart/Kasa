import Slides from "../components/Slides.jsx";
import RentData from "../rawdata/logements.json";
import Error from "./Error.jsx";
import Detail from "../components/Detail.jsx";
import Tag from "../components/Tag.jsx";

function Rental() {
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
        </div>
      </section>
    </main>
  )
 }
}
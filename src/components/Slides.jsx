import { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";
import RentData from "../rawdata/logements.json";
import "../style/_slides.scss";

/** Fonction pour la gestion des slides sur la page de location (Rentable)
 * @if pour l'affichage de l'interface complète (numéro et flèches)
 * @else pour le cas où l'affichae complet n'est pas nécessaire 
 */
function Slides() {
  const { id } = useParams()
  const rent = RentData.find((rent) => rent.id === id)
  const [slide, setSlide] = useState(0)
  const prevImg = () => {
    setSlide(slide === 0 ? rent.pictures.length - 1 : slide - 1)
  }
  const nextImg = () => {
    setSlide(slide === rent.pictures.length - 1 ? 0 : slide + 1)
  }
  if (rent.pictures.length > 1) {
    return (
    <section className="slideshow">
      <div className="slideshow__container">  
        {rent.pictures.map((picture, index) => (
          <img 
            src={picture}
            alt={rent.title}
            key={index}
            className={slide === index ? "slideshow__container_slide" : "slideshow__container_slidehidden"}
          />    
        ))}
        <img 
          src={ArrowLeft} 
          alt="Flèche gauche" 
          className="slideshow__container_arrowleft arrow"
          onClick={prevImg}
        />
        <img 
          src={ArrowRight} 
          alt="Flèche droite" 
          className="slideshow__container_arrowright arrow" 
          onClick={nextImg}
        />
        <span className="carousel__container_indicator">
          {slide + 1}/{rent.pictures.length}
        </span>
      </div>
    </section>
  ) 
  } else {
    return (
      <section className="slideshow">
        <div className="slideshow__container">  
          {rent.pictures.map((picture, index) => (
            <img 
              src={picture}
              alt={rent.title}
              key={index}
              className={slide === index ? "slideshow__container_slide" : "slideshow__container_slidehidden"}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default Slides;
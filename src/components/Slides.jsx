import { useState } from "react";
import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";
import "../style/_slides.scss";

/** Fonction pour la gestion des slides sur la page de location (Rental), c'est un composant contrôlé (par React)
 * @if pour l'affichage de l'interface complète (numéro et flèches)
 * @else pour le cas où l'affichae complet n'est pas nécessaire 
 */
function Slides({pictures, title}) {
  const [slide, setSlide] = useState(0)
  const prevImg = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }
  const nextImg = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }
  if (pictures.length > 1) {
    return (
    <section className="slideshow">
      <div className="slideshow__container">  
        {pictures.map((picture, index) => (
          <img 
            src={picture}
            alt={title}
            key={index}
            className={slide === index ? "slideshow__container_slide" : "slideshow__container_slidehidden"}
          />    
        ))}
        <button onClick={prevImg} className="slideshow__container_arrowleft">
          <img 
            src={ArrowLeft} 
            alt="Image précédente"
            className="arrow"
          />
        </button>
        <button onClick={nextImg} className="slideshow__container_arrowright">
          <img 
            src={ArrowRight} 
            alt="Image suivante"
            className="arrow"
          />
        </button>
        <span className="slideshow__container_indicator">
          {slide + 1}/{pictures.length}
        </span>
      </div>
    </section>
  ) 
  } else {
    return (
      <section className="slideshow">
        <div className="slideshow__container">  
          {pictures.map((picture, index) => (
            <img 
              src={picture}
              alt={title}
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
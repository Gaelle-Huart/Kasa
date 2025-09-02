import Cover from "../components/Cover.jsx";
import Gallery from "../components/Gallery.jsx";

/** Fonction qui rassemble les éléments nécessaires à la page index (accueil)
 * @Cover l'image d'entête et le slogan
 * @Gallery la grille de logements proposés à la location 
 */
export function Index() {
  return (
    <>
      <Cover page="index" txt="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  )
}

export default Index
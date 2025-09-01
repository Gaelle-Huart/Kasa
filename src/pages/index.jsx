import Cover from "../components/Cover.jsx";

/** Fonction qui rassemble les éléments nécessaires à la page index (accueil)
 * @Cover l'image d'entête et le slogan
 * @returns 
 */
export function Index() {
  return (
    <>
      <Cover page="index" txt="Chez vous, partout et ailleurs" />
    </>
  )
}

export default Index
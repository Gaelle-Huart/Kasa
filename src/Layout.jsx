import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

/** Fichier qui permet d'afficher Header et Footer sur toutes les pages du site
 * @Outlet permet d'insérer des routes enfants dans une route parent
 */
function Layout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout
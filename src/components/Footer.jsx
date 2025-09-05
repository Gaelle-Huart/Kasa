/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// Footer du site /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

import logo_W from "../assets/Logo_W.png";
import "../style/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo_W} alt="Logo de kasa" className="footer_img" />
      <p className="footer_txt">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

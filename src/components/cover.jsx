import imgIndex from "../assets/bkgd_index.png";
import imgAbout from "../assets/bkgd_about.png";
import "../style/_cover.scss";

function Cover({page, txt}) {
  const src = page === "index" ? imgIndex : imgAbout;
  return (
    <div className="cover__wrap">
      <img src={src} alt="Image de fond" className="cover__img" />
      <div className="cover__txt">
        <p>{txt}</p>
      </div>
    </div>
  )
}

export default Cover;
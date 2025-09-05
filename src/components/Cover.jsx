import imgIndex from "../assets/bkgd_index.png";
import imgAbout from "../assets/bkgd_about.png";
import "../style/_cover.scss";

function Cover({page, txt}) {
  const src = page === "index" ? imgIndex : imgAbout;
  return (
    <div className="cover__wrap">
      <img src={src} alt="" className={`cover__img ${page === "index" ? "shadow" : ""}`} />
      <div className="cover__txt">
        <p>{txt}</p>
      </div>
    </div>
  )
}

export default Cover;

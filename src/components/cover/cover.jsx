import coverIndex from "../../assets/bkgd_index.png";
import coverAbout from "../../assets/bkgd_about.png";
import "./_cover.scss";

function Cover({page, content}) {
  const src = page === "index" ? coverIndex : coverAbout
  return (
    <div className="cover_wrap">
      <img src={src} alt="Image de fond" className="cover_wrap-img" />
      <div className="cover_txt">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Cover;
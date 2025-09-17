import "../style/_detail.scss";
import ArrowUp from "../assets/arrow_up.png";

function Detail({page, title, children}) {
  return (
    <details className="detail">
      <summary className={`detail__title ${page === "rental" ? "is-rounder is-smaller" : ""}`}> 
        {title}
        <img src={ArrowUp} alt="" className="chevron" />
      </summary>
      <div className="detail__content">{children}</div>
    </details>
  )
}

export default Detail;

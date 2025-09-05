import "../style/_detail.scss";
import ArrowUp from "../assets/arrow_up.png";

function Detail({page, title, children}) {
  return (
    <details className="detail">
      <summary className={`detail__title ${page === "rental" ? "modif" : ""}`}> 
        {title}
        <img src={ArrowUp} alt="" className="chevron" />
      </summary>
      <p className="detail__content" >{children}</p>
    </details>
  )
}

export default Detail;

import { useState } from "react";
import "../style/_detail.scss";
import ArrowUp from "../assets/arrow_up.png";

function Detail({title, children}) {
  const [open] = useState(false)
    return (
    <details className={`detail ${open ? "open" : ""}`}>
      <summary className="detail__title">
        {title}
        <img src={ArrowUp} alt="Chevron" className={`chevron ${open ? "open" : ""}`}/>
      </summary>
      <p className={`detail__content ${open ? "open" : ""}`}>{children}</p>
    </details>
  )
}

export default Detail;
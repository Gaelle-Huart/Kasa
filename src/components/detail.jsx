import { useState } from "react";
import "../style/_detail.scss";
import ArrowUp from "../assets/arrow_up.png";

function Detail({title, children}) {
  const [isOpen] = useState(false)
  return (
    <details className={`detail ${isOpen ? "open" : ""}`}>
      <summary className="detail__title">{title}</summary>
      <p className="detail__content">{children}</p>
    </details>
  )
}

export default Detail;
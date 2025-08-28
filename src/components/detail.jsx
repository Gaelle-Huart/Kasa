import React from "react";
import ArrowUp from "../assets/arrow_up.png";

function Detail({title, txt}) {
  return (
    <details className="detail">
      <summary className="detail__title">{title}</summary>
      <p className="detail__content">{txt}</p>
    </details>
  )
}

export default Detail;
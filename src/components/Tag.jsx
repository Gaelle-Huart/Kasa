import "../style/_tag.scss";

function Tag({tags}) {
  return (
    <div className="tag">
      <ul className="tag__container">
        {tags.map((tag, index) => (
          <li key={index} className="tag__container_item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
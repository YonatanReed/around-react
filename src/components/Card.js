import React from "react";

function Card(props) {
  const [like, setLike] = React.useState(props.card.likes.length);

  function handleClick() {
    props.onCardClick(props.card);
    console.log(props.card._id);
    console.log(props.userId);
  }

  return (
    <>
      <button
        type="button"
        className="element__delete-icon"
  //      style={props.userId !== props.card._id && { display: "none" }}
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__paragraph">{props.card.name}</h2>
        <div className="element__info-like">
          <button type="button" className="element__like"></button>
          <span className="element__like_number">{like}</span>
        </div>
      </div>
    </>
  );
}

export default Card;

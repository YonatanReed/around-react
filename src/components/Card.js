import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <button type="button" className="element__delete-icon" />
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__paragraph">{props.card.name}</h2>
        <div className="element__info-like">
          <button type="button" className="element__like" />
          <span className="element__like_number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;

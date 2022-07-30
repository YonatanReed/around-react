import React from "react";

// v - updated
// maybe delete popup-box__container
function ImagePopup(props) {
  return (
    <div
      className={
        props.isOpen
          ? `popup-box popup-box_image popup-box_opened`
          : `popup-box popup-box_image`
      }
    >
      <div className="popup-box__image-container">
        <button
          className="popup-box__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup-box__image"
          src={props.selectedCard.link}
          alt={props.selectedCard.name}
        />
        <p className="popup-box__caption">{props.selectedCard.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
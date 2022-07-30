import React from "react";

// v - updated
// change popup-box__edit-profile later
// className="form popup__form" changed to className={`form form-${props.name}`}
// className={`form__save-btn form__submit ${props.mod}`}

function PopupWithForm(props) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={
        props.isOpen
          ? `popup-box popup-box_${props.name} popup-box_opened`
          : `popup-box popup-box_${props.name}`
      }
    >
      <div className="popup-box__container">
        <h2 className="popup-box__edit-profile">{props.title}</h2>
        <button
          className="popup-box__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          name={`${props.name}-form`}
          className={`form form-${props.name}`}
          onSubmit={submitHandler}
        >
          <fieldset className="form__set">
            {props.children}
            <button
              type="submit"
              className={`form__save-btn form__submit ${props.mod}`}
            >
              {props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

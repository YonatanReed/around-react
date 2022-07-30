import React from "react";

function PopupWithForm({
  title,
  buttonText,
  children,
  mod,
  name,
  onClose,
  isOpen,
}) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={
        isOpen
          ? `popup-box popup-box_${name} popup-box_opened`
          : `popup-box popup-box_${name}`
      }
    >
      <div className="popup-box__container">
        <h2 className="popup-box__edit-profile">{title}</h2>
        <button
          className="popup-box__close-btn"
          type="button"
          onClick={onClose}
        />
        <form
          name={`${name}-form`}
          className={`form form-${name}`}
          onSubmit={submitHandler}
        >
          <fieldset className="form__set">
            {children}
            <button
              type="submit"
              className={`form__save-btn form__submit ${mod}`}
            >
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

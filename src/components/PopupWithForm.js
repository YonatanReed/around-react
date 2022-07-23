import React from "react";

function PopupWithForm(){

return 
<>

<div className="popup-box popup-box_add">
        <div className="popup-box__container">
          <h2 className="popup-box__edit-profile">New place</h2>
          <button type="button" className="popup-box__close-btn"></button>
          <form className="form form-add" name="add-form" novalidate>
            <fieldset className="form__set">
              <input
                type="text"
                name="title"
                placeholder=" Title"
                className="form__input form__input_type_title"
                id="title"
                required
                minlength="1"
                maxlength="30"
              />
              <span className="title-error form__input-error"></span>
              <input
                type="url"
                name="image-link"
                placeholder=" Image link"
                className="form__input form__input_type_image-link"
                id="image-link"
                required
              />
              <span className="image-link-error form__input-error"></span>
              <button
                type="submit"
                className="form__save-btn form__save-btn_disabled"
                disabled
              >
                Create
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      </>
}
import React from "react";
import avatar from "../images/image1.png";

function Main() {
  function handleEditAvatarClick() {
    let _popup = document.querySelector(".popup-box_edit");
    _popup.classList.add("popup-box_opened");
  }

  function handleEditProfileClick() {
    let _popup = document.querySelector(".popup-box_avatar");
    _popup.classList.add("popup-box_opened");
  }

  function handleAddPlaceClick() {
    let _popup = document.querySelector(".popup-box_add");
    _popup.classList.add("popup-box_opened");
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image">
          <img src={avatar} className="profile__avatar" alt="avatar" />
          <span
            className="profile__edit-picture"
            onClick={handleEditProfileClick}
          ></span>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button
            type="button"
            className="profile__edit-btn"
            onClick={handleEditAvatarClick}
          ></button>
          <p className="profile__job"></p>
        </div>
        <button
          type="button"
          className="profile__add-btn"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;

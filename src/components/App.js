import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    console.log("handleEditProfileClick() was called");
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(data) {
    setIsImagePopupOpen(true);
    setSelectedCard({ name: data.name, link: data.link });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div>
      <Header />
      <Main
        handleEditProfileClick={handleEditProfileClick}
        handleEditAvatarClick={handleEditAvatarClick}
        handleAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Edit profile"
        name="profile"
        buttonText="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="form__input form__input_type_name"
          id="name"
          name="name"
          placeholder=" Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="form__input-error name-error"></span>
        <input
          type="text"
          className="form__input form__input_type_job"
          id="about-me"
          name="about-me"
          placeholder=" About me"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="form__input-error job-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="New place"
        name="cards"
        buttonText="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="form__input form__input_type_title"
          id="place-title"
          name="place-title"
          placeholder=" Title"
          required
          minLength="1"
          maxLength="300"
        />
        <span className="form__input-error title-error"></span>
        <input
          type="url"
          className="form__input form__input_type_image-link"
          id="image"
          name="image"
          placeholder=" Image link"
          required
        />
        <span className="form__input-error image-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Change profile picture"
        name="avatar"
        buttonText="Save"
        mod="form__save-btn_avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="form__input form__input_type_avatar"
          id="avatar"
          name="avatar"
          placeholder="profile picture link"
          required
        />
        <span className="form__input-error avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Are you sure?"
        name="delete"
        buttonText="Yes"
        mod="form__save-btn"
        isOpen={isDeleteCardPopupOpen}
      ></PopupWithForm>
      <ImagePopup
        selectedCard={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

/*
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
const [cards, setCards] = React.useState([]);
const [selectedCard, setSelectedCard] = React.useState("");

function closeAllPopups(){
  setEditProfilePopupOpen(false);
  setEditProfilePopupOpen(false);
  setEditProfilePopupOpen(false);
}



function closeImagePopup(){
  setSelectedCard("");
}

function openEditProfile(){
  setEditProfilePopupOpen(!isEditProfilePopupOpen);
}

function openAddPlace(){
  setAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function openEditAvatarPicture(){
  setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}

function handleCardClick(){
  setSelectedCard(this);
}

React.useEffect(()=> {
  api.getInitialCards().then(res) => {
    setCards(res);
  });
}, []};


*/


/* in App():
<ImagePopup card={selectedCard} onClose={closeImagePopup} />
<PopupWithForm 
name = "editAvatar"




*/



function App() {
  return (
    <>




    <div className="page">
      <Header />
      <Main />
      <Footer />

      

      

      <div className="popup-box popup-box_image">
        <div className="popup-box__image-container">
          <button type="button" className="popup-box__close-btn"></button>
          <img className="popup-box__image" />
          <p className="popup-box__caption"></p>
        </div>
      </div>

      <template id="template-element">
        <div className="element">
          <button className="element__delete-icon"></button>
          <img src="#" className="element__image" alt="#" />
          <div className="element__info">
            <h2 className="element__paragraph"></h2>
            <div className="element__info-like">
              <button type="button" className="element__like"></button>
              <span className="element__like_number">0</span>
            </div>
          </div>
        </div>
      </template>

      <div className="popup-box popup-box_delete">
        <div className="popup-box__container">
          <form className="form form_delete">
            <button className="popup-box__close-btn" type="button"></button>
            <h2 className="popup-box-title">Are you sure?</h2>
            <button type="submit" className="form__save-btn">
              Yes
            </button>
          </form>
        </div>
      </div>

      <div className="popup-box popup-box_avatar">
        <div className="popup-box__container">
          <h2 className="popup-box-title popup-box-title_avatar">
            Change profile picture
          </h2>
          <form name="form-avatar" className="form form-avatar" noValidate>
            <fieldset className="form__set">
              <button className="popup-box__close-btn" type="button"></button>
              <input
                type="url"
                className="form__input form__input_avatar"
                id="avatar"
                name="avatar"
                placeholder="profile picture link"
                required
              />
              <span className="avatar-error form__input-error"></span>

              <button
                type="submit"
                className="form__button-save form__save-btn_avatar form__save-btn"
              >
                Save
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </>);
}

export default App;

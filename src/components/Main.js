import React, { useState, useEffect } from "react"; 
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setUserId(userData._id);
        setCards(cardsData);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image">
          <img
            src={userAvatar}
            className="profile__avatar"
            alt="profile picture"
          />
          <span
            onClick={props.handleEditAvatarClick}
            className="profile__edit-picture"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.handleEditProfileClick}
            className="profile__edit-btn"
            type="button"
          />
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          onClick={props.handleAddPlaceClick}
          className="profile__add-btn"
          type="button"
        />
      </section>
      <section>
        <div className="elements">
          {cards.map((card) => <div key={card._id} className="element">
                <Card
                  card={card}
                  userId={userId}
                  onCardClick={props.onCardClick}
                />
              </div>) }
          
        </div>
      </section>
    </main>
  );
}

export default Main;

import React, { useContext } from "react";
import Card from "./Card"; // Импортируем компонент Card
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteCardClick,
  likeCard,
  cards,
}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__avatar_button">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            onClick={onEditAvatar}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__status">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            likeCard={likeCard}
            onDeleteCardClick={onDeleteCardClick}
          />
        ))}
      </section>
    </div>
  );
}
export default Main;

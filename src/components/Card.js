import React, { useContext } from "react";
import deleteImage from "../images/Trash.svg";
import likeImage from "../images/like.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({
  card,
  onCardClick,
  likeCard,
  onDeleteCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like-img ${
    isLiked ? "element__like-img_active" : " "
  }`;
  const handleClick = () => {
    onCardClick(card);
  };
  const handleLikeClick = () => {
    likeCard(card);
  };
  const handleDeleteCardClick = () => {
    onDeleteCardClick(card);
  };

  return (
    <div>
      <article className="element">
        {isOwn && (
          <button type="button" className="element__trash-button">
            <img
              className="element__trash-img"
              src={deleteImage}
              alt="Корзина"
              onClick={handleDeleteCardClick}
            />
          </button>
        )}
        <img
          className="element__img"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="element__container">
          <h2 className="element__text">{card.name}</h2>
          <button type="button" className="element__like-button">
            <img
              className={cardLikeButtonClassName}
              src={likeImage}
              alt="Лайк"
              onClick={handleLikeClick}
            />
            <span className="element__like-counter">{card.likes.length}</span>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Card;

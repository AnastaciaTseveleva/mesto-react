import deleteImage from '../images/Trash.svg';
import likeImage from '../images/like.svg';

function Cards({ card, onCardClick}) {
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <div>
        <article className="element">
          <button type="button" className="element__trash-button">
            <img className="element__trash-img" src={deleteImage} alt="Корзина" />
          </button>
          <img className="element__img" src={card.link} alt="" onClick={handleClick}/>
          <div className="element__container">
            <h2 className="element__text">{card.name}</h2>
            <button type="button" className="element__like-button">
              <img className="element__like-img" src={likeImage} alt="Лайк" />
              <span className='element__like-counter'>{card.likes.length}</span>
            </button>
          </div>
          </article>
    </div>
  );
}

export default Cards;
import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card'; // Импортируем компонент Card
function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}){
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, cardsData]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cardsData);
      })
      .catch(error => {
        console.log(error);
      });
    }, []);
  return(
        <div className="content">
            <section className="profile">
              <div className="profile__avatar_button">
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}} onClick={onEditAvatar}></div>
              </div>
              <div className="profile__info"> 
                  <h1 className="profile__name">{userName}</h1>
                  <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>  
                  <p className="profile__status">{userDescription}</p>
              </div>
              <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
              {cards.map((card) => (
                <Card key={card._id} card={card} onCardClick={onCardClick} />
              ))}
            </section>
        </div>
    )
}
export default Main;

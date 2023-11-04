import React, { useState } from 'react';//useState-это хук, который позволяет добавлять состояние React к функциональным компонентам

import Header from './Header';//импорт header
import Main from './Main';//импорт main(имя, статус, аватарка)
import Footer from './Footer';//импорт footer
import PopupWithForm from './PopupWithForm';//импорт общей разметки всех папапов
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState([null]);

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setSelectedCard([null]);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
  }

  return (
    <div className="App"> 
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={setSelectedCard}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      {/* Редактироваь профиль */}
      <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_name_edit" id="name-input" type="text" name="name" required minLength="2" placeholder="Имя"/>
        <span className='popup__input-error popup__input-error_edit name-input-error' id='name-error'></span>
        <input className="popup__input popup__input_status_edit" id="status-input" type="text" name="status" required minLength="2" placeholder="О себе"/>
        <span className='popup__input-error popup__input-error_edit status-input-error' id='status-error'></span>
      </PopupWithForm>

      {/* Добавить место */}
      <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_name_add" id="caption-input" type="text" name="caption" placeholder="Название"  required minLength="2"/>
        <span className='popup__input-error caption-input-error' id='caption-error'>f</span>
        <input className="popup__input popup__input_link_add" type="url" id="link-input" name="link" placeholder="Ссылка на картинку"  required/>
        <span className='popup__input-error link-input-error' id="link-error">gf</span>
      </PopupWithForm>

      {/* Подтверждение удаления крточки*/}
      <PopupWithForm title="Вы уверенны?" name="delete"></PopupWithForm>

      {/* Изменить аватарку */}
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup-avatar__input popup__input_link_avatar" type="url" id="avatar-input" name="avatar" placeholder="Ссылка на картинку"  required/>
        <span className='popup__input-error avatar-input-error' id="avatar-error">gf</span>
      </PopupWithForm>
      
    </div>
  );
}

export default App;

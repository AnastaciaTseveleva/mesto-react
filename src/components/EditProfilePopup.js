import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_name_edit"
        id="name-input"
        type="text"
        name="name"
        value={name || ""}
        onChange={handleNameChange}
        required
        minLength="2"
        placeholder="Имя"
      />
      <span
        className="popup__input-error popup__input-error_edit name-input-error"
        id="name-error"
      ></span>
      <input
        className="popup__input popup__input_status_edit"
        id="status-input"
        type="text"
        name="about"
        value={description || ""}
        onChange={handleDescriptionChange}
        required
        minLength="2"
        placeholder="О себе"
      />
      <span
        className="popup__input-error popup__input-error_edit status-input-error"
        id="status-error"
      ></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;

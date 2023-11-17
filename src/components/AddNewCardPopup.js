import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect } from "react";

function AddNewCardPopup({ isOpen, onClose, onUpdateCard }) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setLink("");
    setName("");
  }, [isOpen]);

  function handleSubmitCard(e) {
    e.preventDefault();
    onUpdateCard({ name, link });
  }

  const handleCardNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCardLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitCard}
    >
      <input
        className="popup__input popup__input_name_add"
        id="caption-input"
        type="text"
        name="caption"
        placeholder="Название"
        required
        minLength="2"
        value={name}
        onChange={handleCardNameChange}
      />
      <span
        className="popup__input-error caption-input-error"
        id="caption-error"
      ></span>
      <input
        className="popup__input popup__input_link_add"
        type="url"
        id="link-input"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleCardLinkChange}
      />
      <span
        className="popup__input-error link-input-error"
        id="link-error"
      ></span>
    </PopupWithForm>
  );
}
export default AddNewCardPopup;

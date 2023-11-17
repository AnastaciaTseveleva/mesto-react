import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarr = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar:
        avatarr.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup-avatar__input popup__input_link_avatar"
        type="url"
        id="avatar-input"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarr}
      />
      <span className="popup__input-error avatar-input-error" id="avatar-error">
        gf
      </span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;

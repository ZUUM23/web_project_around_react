import { useState, useContext, useRef } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { currentUser, onUpdateAvatar } = useContext(CurrentUserContext);
  const avatar = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({ avatar: avatar.current.value });
  }
  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        type="url"
        className="popup__input popup__input_type_card-name"
        minlength="2"
        maxlength="200"
        ref={avatar}
        required
        name="avatar"
        placeholder="URL"

        // value={avatar}
        // onChange={handleImgChange}
      />
      <span className="place-name-input-error popup__input-error">
        completa este campo
      </span>
      <button className="popup__buttom-avatar" type="submit">
        Guardar
      </button>
    </form>
  );
}

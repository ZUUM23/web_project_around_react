import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../Contexst/CurrentUserContext";

export default function EditAvatar() {
  const { currentUser } = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const handleImgChange = () => {
    setAvatar(); //
  };
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({ avatar: avatar });
  }
  return (
    <form className="popup__form">
      <input
        type="url"
        className="popup__input popup__input_type_card-name"
        minlength="2"
        maxlength="200"
        required
        name="avatar"
        onSubmit={handleSubmit}
        placeholder="URL"
        value={avatar}
        onChange={handleImgChange}
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

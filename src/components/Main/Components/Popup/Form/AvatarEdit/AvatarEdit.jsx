export default function AvatarEdit() {
  return (
    <form className="popup__form">
      <input
        type="url"
        className="popup__input popup__input_type_card-name"
        minlength="2"
        maxlength="200"
        required
        name="avatar"
        placeholder="URL"
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

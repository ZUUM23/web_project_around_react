export default function EditProfile() {
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="formulario"
      noValidate
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        id="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        type="text"
        required
      />
      <span className="name-input-error popup__input-error">
        completa este campo
      </span>
      <input
        className="popup__input popup__input_type_description"
        name="description"
        id="description"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        required
        type="text"
      />
      <span className="description-input-error popup__input-error">
        completa este campo
      </span>
      <button className="button popup__button" type="submit" disabled>
        Guardar
      </button>
    </form>
  );
}

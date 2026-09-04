import avatarUno from "../../images/avatar.jpg";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../Contexst/CurrentUserContext.jsx";
import Popup from "./Components/Popup/Popup.jsx";
import NewCard from "./Components/Popup/Form/NewCard/NewCard.jsx";
import EditProfile from "./Components/Popup/Form/EditProfile/EditProfile.jsx";
import EditAvatar from "./Components/Popup/Form/EditAvatar/EditAvatar.jsx";
import Card from "./Components/Card/Card.jsx";
import RemoveCard from "./Components/Popup/Form/RemoveCard/RemoveCard.jsx";
import ImagePopup from "./Components/ImagePopup/ImagePopup.jsx";
import lapizEdit from "../../images/edit-icon.svg";
import Api from "../../Utilis/Api.js";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const { currentUser, handleCardLike, cards, handleCardDelete } =
    useContext(CurrentUserContext);

  const newCardPopup = { name: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    name: "Editar perfil",
    children: <EditProfile />,
  };
  const deleteCards = {
    name: "Estas seguro",
    children: <RemoveCard />,
  };

  const editAvatarPopup = {
    name: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar">
          <img
            src={currentUser?.avatar}
            className="profile__image"
            alt="Avatar"
          />
          <button
            className="profile__imagen-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img className="profile__lapiz" src={lapizEdit} alt="editar" />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
              handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

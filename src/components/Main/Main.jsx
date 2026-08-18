import avatarUno from "../../images/avatar.jpg";
import { useState } from "react";
import Popup from "./Components/Popup/Popup.jsx";
import NewCard from "./Components/Popup/Form/NewCard/NewCard.jsx";
import EditProfile from "./Components/Popup/Form/EditProfile/EditProfile.jsx";
import EditAvatar from "./Components/Popup/Form/EditAvatar/EditAvatar.jsx";
import Card from "./Components/Card/Card.jsx";
import RemoveCard from "./Components/Popup/Form/RemoveCard/RemoveCard.jsx";
import ImagePopup from "./Components/ImagePopup/ImagePopup.jsx";
import lapizEdit from "../../images/edit-icon.svg";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd708dd",
    title: "lago oculto",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizh5bunA_C6igG94PUkOTezwF4ZCC8M2f6uhTakKmq22yueUTmCXRrD2g&s=10",
    owner: "5d1f0611d321eb4bdcd708dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
];
console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const deleteCards = {
    title: "Estas seguro",
    children: <RemoveCard />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
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
          <img src={avatarUno} className="profile__image" alt="Avatar" />
          <button
            className="profile__imagen-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img className="profile__lapiz" src={lapizEdit} alt="editar" />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
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
              onOpenPopup={() => handleOpenPopup({ link: card.link })}
              onCardDelete={() =>
                handleOpenPopup({ ...deleteCards, id: card.id })
              }
            />
          ))}
        </ul>
      </section>

      {popup &&
        (popup.link ? (
          <ImagePopup card={popup} onClose={handleClosePopup} />
        ) : (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        ))}
    </main>
  );
}

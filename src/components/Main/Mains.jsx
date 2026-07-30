import avatarUno from "../../images/avatar.jpg";
import { useState } from "react";
import Popup from "./Components/Popup/Popup.jsx";
import NewCard from "./Components/Popup/Form/NewCard/NewCard.jsx";
import EditProfile from "./Components/Popup/Form/EditProfile/EditProfile.jsx";
import AvatarEdit from "./Components/Popup/Form/AvatarEdit/AvatarEdit.jsx";
import Card from "./Components/Card/Card.jsx";
import ImagePopup from "./Components/ImagePopup/ImagePopup.jsx";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
];
console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newprofile = { title: "nombre", children: <EditProfile /> };
  const newAvatar = {
    title: "ingrese la url la imagen",
    children: <AvatarEdit />,
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
            onClick={() => handleOpenPopup(newAvatar)}
          >
            <img
              className="profile__lapiz"
              src="./images/edit-icon.svg"
              alt="editar"
            />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(newprofile)}
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
              onOpenPopup={() =>
                handleOpenPopup({ title: card.title, link: card.link })
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

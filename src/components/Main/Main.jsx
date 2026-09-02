import avatarUno from "../../images/avatar.jpg";
import { useContext, useEffect, useState } from "react";

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
  const [cards, setCards] = useState([]);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
      authorization: "b5941826-d91b-40a9-a09f-703968f12f07",
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    api.getInitialCards().then((data) => {
      console.log(data, ":datos");

      setCards(data);
    });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    console.log("clic recibido", card);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        console.log(newCard);

        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }
  function handleCardDelete(card) {
    api.deleteCardsApi(card._id).then((removeCard) => {
      console.log(removeCard);
      setCards((data) =>
        data.filter((deleteCard) => deleteCard._id !== card._id),
      );
    });
  }

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
          <img
            src={currentUser.avatar}
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
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
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
              onCardLike={() => handleCardLike(card)}
              onCardDelete={() => handleCardDelete(card)}
              // onCardDelete={() =>
              //   handleOpenPopup({ ...deleteCards, id: card.id })}
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

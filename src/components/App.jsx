import { useContext, useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
// import Api from "../utils/Api.js";
import api from ".././utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  // const api = new Api({
  //   baseUrl: "https://around-api.es.tripleten-services.com/v1",
  //   headers: {
  //     authorization: "b5941826-d91b-40a9-a09f-703968f12f07",
  //     "Content-Type": "application/json",
  //   },
  // });
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleOpenPopup(nextPopup) {
    setPopup(nextPopup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser(data) {
    api
      .profileUpdateUser(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  function handleCardLike(card) {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c)),
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardDelete(card) {
    api
      .deleteCardsApi(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  function handleAddPlaceSubmit(data) {
    api
      .addSendLetter(data)
      .then((newCard) => {
        setCards((state) => [newCard, ...state]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  const onUpdateAvatar = (dta) => {
    (async () => {
      await api.updateProfilePicture(dta).then((newImg) => {
        setCurrentUser(newImg);
        handleClosePopup();
        console.log(newImg);
      });
    })();
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        cards,
        handleUpdateUser,
        onUpdateAvatar,
        handleAddPlaceSubmit,
        handleCardDelete,
        handleCardLike,
        popup,
        setPopup,
      }}
    >
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;

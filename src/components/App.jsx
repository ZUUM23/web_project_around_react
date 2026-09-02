import { useContext, useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import Api from "../Utilis/Api.js";

import {
  CurrentUserContext,
  CurrentUserProvider,
} from "../Contexst/CurrentUserContext.jsx";

function App() {
  const { currentUser, setCurrentUser } = useState(CurrentUserContext);
  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
      authorization: "b5941826-d91b-40a9-a09f-703968f12f07",
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("vuelve a intentar");
      });
    api.getInitialCards().then((data) => {
      console.log(data, ":datos");

      setCards(data);
    });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.getUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        console.log(data, "datos de handleUpdateUser ");
      });
    })();
  };
  const handleUpdateAvatar = (dta) => {
    (async () => {
      await api.updateProfilePicture(dta).then((newImg) => {
        setCurrentUser(newImg);
      });
    })();
  };
  return (
    <CurrentUserProvider.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleUpdateUser,
      }}
    >
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserProvider.Provider>
  );
}
export default App;

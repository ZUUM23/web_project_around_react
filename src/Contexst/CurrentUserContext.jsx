import { createContext, useContext, useState } from "react";
export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  // const [popup, setPopup] = useState(null);
  // const [cards, setCards] = useState([]);

  return <CurrentUserContext>{children}</CurrentUserContext>;
}

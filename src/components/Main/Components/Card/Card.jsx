import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.js";
export default function Card({
  card,
  handleOpenPopup,
  handleCardLike,
  handleCardDelete,
}) {
  const { name, link, isLiked, owner } = card;
  const { currentUser } = useContext(CurrentUserContext);
  const imagePopup = {
    children: <ImagePopup card={card} />,
  };
  const isOwner = currentUser._id === owner;
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imagePopup)}
      />
      {isOwner && (
        <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
          onClick={() => handleCardDelete(card)}
        />
      )}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => handleCardLike(card)}
        />
      </div>
    </li>
  );
}

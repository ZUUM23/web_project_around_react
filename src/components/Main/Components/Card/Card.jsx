import { Children, useState, useContext } from "react";

export default function Card({ card, onOpenPopup, onCardDelete, onCardLike }) {
  // const { currentUser, setCurrentUser } = useContext();
  const { title, link, isLiked, id } = card;

  const imageComponent = {
    title: title,
    link: link,
  };
  const deleteClick = {
    id: id,
  };
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;
  const handleLikeClick = () => {
    onCardLike(card);
  };
  const handleDeleteClick = () => {
    onCardDelete(deleteClick);
  };
  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => onOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      />
      <div className="card__description">
        <h2 className="card__title">{title}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          // onClick={() => onCardLike(card)}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}

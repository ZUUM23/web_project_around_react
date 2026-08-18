import { Children, useState } from "react";

export default function Card({ card, onOpenPopup, onCardDelete }) {
  const { title, link, isLiked, id } = card;
  const imageComponent = {
    title: title,
    link: link,
  };
  const deleteClick = {
    id: id,
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
        onClick={() => onCardDelete(deleteClick)}
      />
      <div className="card__description">
        <h2 className="card__title">{title}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}

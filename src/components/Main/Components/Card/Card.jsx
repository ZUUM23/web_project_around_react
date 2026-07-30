import { useState } from "react";
export default function Card({ card, onOpenPopup }) {
  const { title, link, isLiked } = card;
  const imageComponent = {
    title: title,
    link: link,
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

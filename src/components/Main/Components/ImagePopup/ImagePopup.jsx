export default function ImagePopup({ card, onClose }) {
  const { name, link } = card;

  return (
    <div className="popup">
      <div
        className={`popup__content ${
          !name ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={link} alt="imagen ampliada"></img>
        {name && <h3 className="popup__title">{name}</h3>}
      </div>
    </div>
  );
}

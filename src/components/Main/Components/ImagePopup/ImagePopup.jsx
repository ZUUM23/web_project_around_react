export default function ImagePopup({ card, onClose }) {
  const { title, link } = card;

  return (
    <div className="popup">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={link} alt="imagen ampliada"></img>
        {title && <h3 className="popup__title">{title}</h3>}
      </div>
    </div>
  );
}

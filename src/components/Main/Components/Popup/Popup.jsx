export default function Popup({ onClose, name, children }) {
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
        {name && <h3 className="popup__title">{name}</h3>}
        {children}
      </div>
    </div>
  );
}

export default function ImagePopup({ card, onClose }) {
  const { name, link } = card;

  return (
    <>
      <img className="popup__image" src={link} alt={name}></img>
      <h3 className="popup__title">{name}</h3>
    </>
  );
}

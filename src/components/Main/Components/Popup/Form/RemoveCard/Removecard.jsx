export default function RemoveCard({ onConfirm }) {
  return (
    <div className="popup__delete-confimation" id="confirmation__delete">
      <button
        className="popup__buttom-delete"
        onClick={onConfirm}
        type="submit"
      >
        si
      </button>
    </div>
  );
}

import './Modal.css'

function Modal({ children, onClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal
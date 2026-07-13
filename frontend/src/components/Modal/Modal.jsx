import './Modal.css'

function Modal({ children, onClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <button className="modal-exit" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal
import Modal from "../../Modal/Modal";

function LogoutConfirmationModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Are you sure you want to log out?</h2>
      <button>Yes</button>
      <button onClick={onClose}>No</button>
    </Modal>
  );
}

export default LogoutConfirmationModal;
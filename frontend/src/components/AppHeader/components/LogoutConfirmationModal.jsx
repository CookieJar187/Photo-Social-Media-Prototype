import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../../api/authApi";

import Modal from "../../Modal/Modal";

function LogoutConfirmationModal({ onClose }) {

  const navigate = useNavigate();

  async function logout() {
    try {
      logoutUser();
      navigate("/login", { replace: true });
      
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <Modal onClose={onClose}>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={logout}>Yes</button>
      <button onClick={onClose}>No</button>
    </Modal>
  );
}

export default LogoutConfirmationModal;
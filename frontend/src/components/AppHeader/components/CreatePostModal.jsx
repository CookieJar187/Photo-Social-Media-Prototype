import Modal from "../../Modal/Modal";

function CreatePostModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Create New Post</h2>
      <img alt="Post image" height={512} width={512} />
      <button>Select image</button>
      <textarea placeholder="Post title..." />
      <textarea placeholder="Post description..." />
      <button>Post</button>
    </Modal>
  );
}

export default CreatePostModal;
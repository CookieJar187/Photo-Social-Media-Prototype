import apple_img from '../../../assets/apple.jpg'
import "./CreatePostModal.css"

import { useState } from "react";

import { createPost } from "../../../api/postsApi";

import Modal from "../../Modal/Modal";

function CreatePostModal({ onClose }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function post() {
    try {
      const data = await createPost(title, description);

      console.log(data);

      onClose();
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Modal onClose={onClose}>
      <h2 className="modal-label">Create New Post</h2>
      <img className="post-image" src={apple_img} alt="Post image" height={256} width={256} />

      <textarea
        className="post-title"
        placeholder="Post title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="post-description"
        placeholder="Post description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button className="select-image">Select image</button>
      <button className="create-post" onClick={post}>Post</button>
    </Modal>
  );
}

export default CreatePostModal;
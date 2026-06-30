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
      <h2>Create New Post</h2>
      <img className="post-image" alt="Post image" height={512} width={512} />
      <button>Select image</button>

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

      <button onClick={post}>Post</button>
    </Modal>
  );
}

export default CreatePostModal;
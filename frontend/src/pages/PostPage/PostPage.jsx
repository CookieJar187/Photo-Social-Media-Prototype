import './PostPage.css'
import apple_img from '../../assets/apple.jpg'

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPost } from '../../api/postsApi';
import { getProfile } from '../../api/profilesApi';

import AppHeader from '../../components/AppHeader/AppHeader'

function PostPage() {

    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    function handleReturn() { navigate("/explore"); }

    useEffect(() => {
    
        async function loadPost() {

            const data = await getPost(postId);
            setPost(data.post);

            const authorName = await getProfile(data.post.author_id);
            setAuthor(authorName.profile);
        }

        loadPost();
    }, [postId]);

    if (!post) return <p>Loading...</p>;

    return(
        <div className="post-page">

            <AppHeader/>
            <button onClick={handleReturn}>Go back</button>

            <main>

                <div className="post-details">

                    <div className="left-side">
                        <h1 className="post-title">{post.title}</h1>

                        <img className="post-image" alt={post.title} src={apple_img} width={256} height={256}/>

                        <p className="post-author">Posted by: {author.username}</p>
                        <p className="post-date">Posted on: {post.created_at}</p>
                    </div>

                    <p className="post-description">{post.description}</p>
                    
                </div>

                <div className="post-comments">

                    <h1>Comments</h1>

                    <input className="post-comment-input"/>
                    <button className="post-comment-submit">Submit comment</button>

                    <div className="post-comment-section">

                        <div className="comment">
                            <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="comment-author">by John Smith</p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default PostPage;
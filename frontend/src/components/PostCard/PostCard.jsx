import apple_img from '../../assets/apple.jpg'
import './PostCard.css'

import { useNavigate } from "react-router-dom";

function PostCard({id, title, description}) {

    const navigate = useNavigate();

    function handleSeeMore() {
        navigate(`/post/${id}`);
    }

    return (
        <div className="post-card">
            <img src={apple_img} width={128} height={128} alt="Post Image" className="post-card-image"/>

            <div className="post-card-text-data">
                <h2 className="post-card-title">{title}</h2>
                <p className="post-card-description">{description}</p>
                <button className="post-card-see-more" onClick={handleSeeMore}>See more</button>
            </div>
        </div>
    )
}

export default PostCard
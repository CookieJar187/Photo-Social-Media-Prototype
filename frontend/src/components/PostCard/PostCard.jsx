import apple_img from '../../assets/apple.jpg'
import './PostCard.css'

function PostCard({title, description}) {
    return (
        <div className="post-card">
            <img src={apple_img} width={128} height={128} alt="Post Image" className="post-card-image"/>
            <h2 className="post-card-title">{title}</h2>
            <p className="post-card-description">{description}</p>
            <button className="post-card-see-more">See more</button>
        </div>
    )
}

export default PostCard
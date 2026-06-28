import SearchBar from '../../../components/SearchBar/SearchBar.jsx'
import PostCard from "../../../components/PostCard/PostCard.jsx"

function YourPostsPanel({posts}) {

    return (
        <div className="your-posts-panel">

            <h2>Your Posts</h2>

            <SearchBar/>
            
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                />
            ))}

        </div>
    )
}

export default YourPostsPanel
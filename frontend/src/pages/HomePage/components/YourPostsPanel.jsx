import SearchBar from '../../../components/SearchBar/SearchBar.jsx'
import PostCard from "../../../components/PostCard/PostCard.jsx"

function YourPostsPanel({posts}) {

    return (
        <div className="your-posts-panel">

            <h2>Your Posts</h2>

            <SearchBar/>

            <div className="your-posts">

                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                    />
                ))}
                
            </div>

        </div>
    )
}

export default YourPostsPanel
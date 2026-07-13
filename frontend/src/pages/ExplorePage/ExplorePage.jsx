import './ExplorePage.css'

import { useEffect, useState } from 'react'
import { getPosts } from "../../api/postsApi.js";

import Navbar from '../../components/Navbar/Navbar.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import PostCard from '../../components/PostCard/PostCard.jsx'
import AppHeader from '../../components/AppHeader/AppHeader.jsx'

function ExplorePage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadHomeData() {
            const postsResponse = await getPosts();
    
            setPosts(postsResponse.posts);
        }
    
        loadHomeData();
    }, []);

    return (
        <div className="explore-page">

            <AppHeader/>
            <Navbar/>

            <main>

                <div className="search-tools">
                    <h2>Explore Posts</h2>
                    <SearchBar/>
                </div>

                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                    />
                ))}

            </main>

        </div>
    )
}

export default ExplorePage
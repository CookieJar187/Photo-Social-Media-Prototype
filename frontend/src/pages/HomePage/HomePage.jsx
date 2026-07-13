import './HomePage.css'

import { useEffect, useState } from 'react';
import { getMyPosts } from "../../api/postsApi.js";
import { getFollowers, getFollowing } from "../../api/profilesApi.js";

import Navbar from '../../components/Navbar/Navbar'
import AppHeader from '../../components/AppHeader/AppHeader'

import FriendsPanel from './components/FriendsPanel'
import YourPostsPanel from './components/YourPostsPanel'

function HomePage() {

    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadHomeData() {
            const followersResponse = await getFollowers();
            const followingResponse = await getFollowing();
            const postsResponse = await getMyPosts();

            setFollowers(followersResponse.profiles);
            setFollowing(followingResponse.profiles)
            setPosts(postsResponse.posts);
        }

        loadHomeData();
    }, []);

    return (
        <div className="home-page">

            <AppHeader/>
            <Navbar/>

            <main>

                <FriendsPanel followers={followers} following={following}/>
                <YourPostsPanel posts={posts}/>

            </main>

        </div>
    )
}

export default HomePage
import './HomePage.css'

import { useEffect, useState } from 'react';
import { getUserPosts } from "../../api/postsApi.js";
import { getProfiles } from "../../api/profilesApi.js";

import Navbar from '../../components/Navbar/Navbar'
import AppHeader from '../../components/AppHeader/AppHeader'

import FriendsPanel from './components/FriendsPanel'
import YourPostsPanel from './components/YourPostsPanel'

function HomePage() {

    const [profiles, setProfiles] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadHomeData() {
            const profilesResponse = await getProfiles();
            const postsResponse = await getUserPosts();

            setProfiles(profilesResponse.profiles);
            setPosts(postsResponse.posts);
        }

        loadHomeData();
    }, []);

    return (
        <div className="home-page">

            <AppHeader/>
            <Navbar/>

            <div className="body">

                <FriendsPanel profiles={profiles}/>
                <YourPostsPanel posts={posts}/>

            </div>

        </div>
    )
}

export default HomePage
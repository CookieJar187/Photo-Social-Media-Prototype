import "./ProfilesPage.css"

import { useEffect, useState } from 'react'
import { getProfiles } from '../../api/profilesApi'

import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import UserCard from '../../components/UserCard/UserCard'
import AppHeader from '../../components/AppHeader/AppHeader'

function ProfilesPage() {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        async function loadProfiles() {
            const response = await getProfiles();

            setProfiles(response.profiles)
        }

        loadProfiles();
    }, []);

    return (
        <div className="home-page">

            <AppHeader/>
            <Navbar/>

            <h2>Explore Profiles</h2>

            <SearchBar/>

            <div className="profiles">

                {profiles.map((profile) => (
                    <UserCard
                        key={profile.id}
                        username={profile.username}
                    />
                ))}

            </div>

        </div>
    )
}

export default ProfilesPage
import UserCard from '../../../components/UserCard/UserCard.jsx'

function FriendsPanel({profiles}) {

    return (
        <div className="friends-panel">

            <div className="friends-card">

                <h2>Friends</h2>

                {profiles.map((profile) => (
                    <UserCard
                        key={profile.id}
                        username={profile.username}
                    />
                ))}

            </div>

            <div className="friend-requests-card">
                
                <h2>Friend requests</h2>

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

export default FriendsPanel
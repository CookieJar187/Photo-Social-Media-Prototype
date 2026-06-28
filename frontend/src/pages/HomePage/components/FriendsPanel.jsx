import UserCard from '../../../components/UserCard/UserCard.jsx'

function FriendsPanel({followers, following}) {

    return (
        <div className="friends-panel">

            <div className="followers-card">

                <h2>Followers</h2>

                {followers.map((follower) => (
                    <UserCard
                        key={follower.id}
                        username={follower.username}
                    />
                ))}

            </div>

            <div className="following-card">
                
                <h2>Following</h2>

                {following.map((followee) => (
                    <UserCard
                        key={followee.id}
                        username={followee.username}
                    />
                ))}

            </div>
            
        </div>
    )
}

export default FriendsPanel
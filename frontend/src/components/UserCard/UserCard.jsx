import './UserCard.css'

function UserCard({username}) {
    return (
        <div className="user-card">
            <h2 className="user-card-name">{username}</h2>
            <button className="user-card-friend">Send friend request</button>
            <button className="user-card-unfriend">Unfriend</button>
        </div>
    )
}

export default UserCard
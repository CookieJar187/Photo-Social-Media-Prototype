import './UserCard.css'

function UserCard({username}) {
    return (
        <div className="user-card">
            <h2 className="user-card-name">{username}</h2>
            <button className="user-card-follow">Follow</button>
        </div>
    )
}

export default UserCard
import {Link} from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/profiles">Profiles</Link>
        </div>
    )
}

export default Navbar
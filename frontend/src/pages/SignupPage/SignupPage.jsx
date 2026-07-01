import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { signupUser } from "../../api/authApi";

import AuthHeader from '../../components/AuthHeader/AuthHeader'

function SignupPage() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSignup(event) {
        event.preventDefault();

        try {
            const data = await signupUser(username, email, password);
            console.log("Signup successful:", data);
            navigate("/home")
        } catch (error) {
            console.log("Signup failed:", error.message);
        }
    }

    return (
        <>

        <AuthHeader/>

        <h3>Signup</h3>

        <form onSubmit={handleSignup}>

            <label>Username</label>
            <input
                placeholder="Enter your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>

        </form>

        <footer>
            <button>Login instead</button>
        </footer>

        </>
    )
}

export default SignupPage
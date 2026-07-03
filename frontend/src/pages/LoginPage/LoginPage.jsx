import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/authApi";

import AuthHeader from '../../components/AuthHeader/AuthHeader'

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const data = await loginUser(username, password);
            console.log("Login successful:", data);
            navigate("/home");
        } catch (error) {
            console.log("Login failed:", error.message);
        }
    }

    return (
        <>

        <AuthHeader/>

        <h3>Login</h3>

        <form onSubmit={handleLogin}>

            <label>Username</label>
            <input
                placeholder="Enter your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <button>Create a new account</button>
        </footer>

        </>
    )
}

export default LoginPage
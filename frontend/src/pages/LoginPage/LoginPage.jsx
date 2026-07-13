import "./LoginPage.css"

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/authApi";

import AuthHeader from '../../components/AuthHeader/AuthHeader'
import AuthFooter from "../../components/AuthFooter/AuthFooter";

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
        <div className="login-page">

        <AuthHeader/>

        <main>

            <p>Share photos, explore posts, engage with new people!</p>
            <h3>Login Page</h3>

            <form onSubmit={handleLogin} className="login-form">

                <div className="login-form-input-field">
                    <label>Username</label>
                    <input
                        placeholder="Enter your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="login-form-input-field">
                    <label>Password</label>
                    <input
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>

            </form>

        </main>
        
        <AuthFooter onClick={() => navigate("/signup")}/>

        </div>
    )
}

export default LoginPage

//        <footer>
//            <button className="footer-button" onClick={() => navigate("/signup")}>Create a new account</button>
//        </footer>
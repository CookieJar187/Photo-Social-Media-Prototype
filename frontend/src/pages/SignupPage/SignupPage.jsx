import "./SignupPage.css"

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { signupUser } from "../../api/authApi";

import AuthHeader from '../../components/AuthHeader/AuthHeader'
import AuthFooter from '../../components/AuthFooter/AuthFooter'

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
        <div className="signup-page">

        <AuthHeader/>

        <main>

            <p>Share photos, explore posts, engage with new people!</p>
            <h3>Create a New Account</h3>

            <form onSubmit={handleSignup} className="signup-form">

                <div className="signup-form-input-field">
                    <label>Username</label>
                    <input
                        placeholder="Enter your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="signup-form-input-field">
                    <label>Email</label>
                    <input
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="signup-form-input-field">
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

        <AuthFooter onClick={() => navigate("/login")}/>

        </div>
    )
}

export default SignupPage
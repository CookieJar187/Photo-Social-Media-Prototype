import AuthHeader from '../../components/AuthHeader/AuthHeader'

function SignupPage() {
    return (
        <>

        <AuthHeader/>

        <div>
            <h3>Signup</h3>
            <label>Username</label>
            <input placeholder="Enter your username..."></input>
            <label>Email</label>
            <input placeholder="Enter your email address..."></input>
            <label>Password</label>
            <input placeholder="Enter your password..."></input>
        </div>

        <footer>
            <button>Login instead</button>
        </footer>

        </>
    )
}

export default SignupPage
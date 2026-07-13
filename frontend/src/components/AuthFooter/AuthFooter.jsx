import "./AuthFooter.css"

function AuthFooter({onClick}) {
    return (
        <footer>
            <button className="footer-button" onClick={onClick}>Create a new account</button>
        </footer>
    )
}

export default AuthFooter
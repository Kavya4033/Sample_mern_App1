import { Link } from "react-router-dom";
import './Header.css'
function header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>

        </div>
    )

}
export default header;
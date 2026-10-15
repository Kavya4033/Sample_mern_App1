import { Link } from "react-router-dom";
import './Header.css'
function header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/AdminLogin">Admin Login</Link>

        </div>
    )

}
export default header;
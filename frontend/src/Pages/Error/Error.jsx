import { Link } from "react-router-dom";
import "../Error/error.css"

const Error = () => {
    return (
        <div className="errorPage">
            <p className="errorTitle">ERROR 401</p>
            <p className="errorText">Unauthenticated User. Please Sign In</p>
            <Link to="/">Go to homepage</Link>
            <Link to="/login">Go to Sing In form</Link>
        </div>
    );
}
export default Error;
import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="not-found">
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for could not be found. Please check </p>
        <Link to="/"> Back to the homepage... </Link>
        </div>
    );
}

export default NotFound;
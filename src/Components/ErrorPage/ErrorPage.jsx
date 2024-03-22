import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops! 404 Not Found!</h2>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
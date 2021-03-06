import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>

            <div className=" bg-dark text-light not_found">
                <div>
                    <h1>4 <span><i className="fa fa-frown-o" aria-hidden="true"></i></span>  4</h1>
                    <h3>Oops! Page not found!</h3>
                    <Link to="/home">  <button className="btn  btn-success mt-4 px-3 py-2">Go back to home page</button></Link>
                </div>

            </div>

        </div>
    );
};

export default NotFound;
import { useContext } from "react";
import "./LoggedOut.css";
import DataContext from "../../Context/dataContext";
import { Link } from "react-router-dom";
import zenlogo from "../../assets/zen logo.png";

const LoggedOut = () => {
  const { handleLogout } = useContext(DataContext);

  return (
    <>
      <div className="loggedOut">
        <div className="row img-container">
          <img src={zenlogo} alt="Zen class logo" className="logo" />
        </div>
        <div className="body-container p-5 rounded">
          <h3 className="text-center mb-5">
            User has been logged out. Kindly go to Login page
          </h3>
          <div className="text-center">
            <Link to="/" onClick={handleLogout} className="btn btn-success">
              Go To Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedOut;

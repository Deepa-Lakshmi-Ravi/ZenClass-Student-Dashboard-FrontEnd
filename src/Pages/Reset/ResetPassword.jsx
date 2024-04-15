import { useContext,useState } from "react";
import DataContext from "../../Context/dataContext";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import logo from "../../assets/zen logo.png";
import banner from "../../assets/zen banner.png";
import "./ResetPassword.css";
import axios from 'axios';



const ResetPasswordForm = () => {
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const { loading,setLoading } = useContext(DataContext);

  const{randomString , expirationTimestamp} = useParams();
  const navigate = useNavigate();

  //handle reset
  const handleresetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post(
        `https://zenclass-student-dashboard-backend-juqy.onrender.com/student/reset-password/${randomString}/${expirationTimestamp}`,
        {
          newPassword: password,confirmPassword
        }
      );
      if (response.status === 200) {
        toast.success("Password updated successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(
          "Invalid token or token has expired.Please request a new reset link.",
          {
            position: "top-center",
          }
        );
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  

  return (
      <div className="resetpage">
        <div className="row m-0">
          <div className="col-md-8">
            <div className="row img-container">
              <img
                src={logo}
                alt="Zen Logo"
                className="zen-logo"
                style={{ width: "150px", height: "100px" }}
              />
            </div>
            <div className="row">
              <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <div className=" col-lg-8">
                      <form>
                        <div className="form-group">
                          <label className="label-style" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            className="form-control"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label className="label-style" htmlFor="confirmpassword">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="********"
                            className="form-control"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <button
                          style={{
                            backgroundColor: "#4b0dba",
                            color: "#fff",
                          }}
                          type="submit"
                          onClick={handleresetPassword}
                          className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center"
                        >
                          {loading ? (
                            <span className="spinner-border text-warning"></span>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </form>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-right banner-right pr-0">
            <img src={banner} className="zenbanner" alt="Zen banner" />
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
  );
};

export default ResetPasswordForm;

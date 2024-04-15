import { useContext, useState } from "react";
import DataContext from "../../Context/dataContext";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import logo from "../../assets/zen logo.png";
import banner from "../../assets/zen banner.png";
import "./ResetPassword.css";
import AxiosService from "../../Axios/AxiosService";

const Validate = Yup.object().shape({
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(15, "Must be less than 15 characters")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Make it More Strong"
    ),
});

const ResetPasswordForm = () => {
  const { loading, setLoading } = useContext(DataContext);

  const { randomString, expirationTimestamp } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setPassword(e.target.value);
    setErrors({});
  };

  const handleresetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Validate.validate({ password });
      let response = await AxiosService.post(
        `/student/reset-password/${randomString}/${expirationTimestamp}`,
        { password }
      );
      if (response.status === 201) {
        toast.success("Password updated successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      if (error.name === "ValidationError") {
        setErrors({ password: error.errors[0] });
      } else {
        toast.error(
          "Invalid token or token has expired. Please request a new reset link.",
          {
            position: "top-center",
          }
        );
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
                <form onSubmit={handleresetPassword}>
                  <div className="form-group">
                    <label className="label-style" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleInputChange}
                      placeholder="********"
                      className="form-control"
                    />
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password}</p>
                    )}
                  </div>
                  <button
                    style={{
                      backgroundColor: "#4b0dba",
                      color: "#fff",
                    }}
                    type="submit"
                    className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center"
                    disabled={loading}
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

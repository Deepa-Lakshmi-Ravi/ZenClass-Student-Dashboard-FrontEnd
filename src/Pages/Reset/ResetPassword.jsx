import { useContext } from "react";
import DataContext from "../../Context/dataContext";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../assets/zen logo.png";
import banner from "../../assets/zen banner.png";
import "./ResetPassword.css";
import AxiosService from "../../Axios/AxiosService";

const Validate = Yup.object().shape({
  password: Yup.string()
    .min(8, "Must be atleast 8 characters")
    .max(15, "Must be less than 15 characters")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Make it More Strong"
    )
});

const ResetPasswordForm = () => {
  const { loading,setLoading } = useContext(DataContext);

  const{randomString , expirationTimestamp} = useParams();
  const navigate = useNavigate();

  const handleresetPassword = async (data) => {
    setLoading(true);
    try {
      let response = await AxiosService.post(
        `/student/reset-password/${randomString}/${expirationTimestamp}`,
        data
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
      toast.error(
        "Invalid token or token has expired.Please request a new reset link.",
        {
          position: "top-center",
        }
      );
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
                  <Formik
                    initialValues={{
                      password: "",
                    }}
                    validationSchema={Validate}
                    onSubmit={(values, { resetForm }) => {
                      handleresetPassword(values);
                      resetForm();
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <label className="label-style" htmlFor="password">
                            Password
                          </label>
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            className="form-control"
                          />
                          {errors.password && touched.password && (
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
                        >
                          {loading ? (
                            <span className="spinner-border text-warning"></span>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
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

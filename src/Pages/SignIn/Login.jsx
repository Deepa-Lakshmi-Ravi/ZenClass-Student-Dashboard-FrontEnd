import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DataContext from "../../Context/dataContext";
import logo from "../../assets/zen logo.png";
import banner from "../../assets/zen banner.png";
import "./Login.css";

const Validate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must be atleast 8 characters")
    .max(15, "Must be less than 15 characters")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Make it More Strong"
    ),
});

const SignInForm = () => {
  const { loading, showPassword, PasswordVisible, handleSignIn } =
    useContext(DataContext);

  return (
    <>
      <div className="loginpage">
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
                      email: "",
                      password: "",
                    }}
                    validationSchema={Validate}
                    onSubmit={(values, { resetForm }) => {
                      handleSignIn(values);
                      resetForm({ values: "" });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <label className="label-style" htmlFor="email">
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Eg: john@abc.com"
                            className="form-control"
                          />
                          {errors.email && touched.email && (
                            <p style={{ color: "red" }}>{errors.email}</p>
                          )}
                        </div>
                        <br />

                        <div className="form-group">
                          <label className="label-style" htmlFor="password">
                            Password
                          </label>
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="********"
                            className="form-control"
                          />
                          {errors.password && touched.password && (
                            <p style={{ color: "red" }}>{errors.password}</p>
                          )}
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={PasswordVisible}
                          />
                          <label htmlFor="showPassword"> Show Password</label>
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
                            "Login"
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
                <Link
                  to="/forgot"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Forget Password?
                </Link>
                <br />
                <p style={{ fontSize: "18px" }}>
                  Create an Account ?
                  <Link
                    to="/signup"
                    style={{ fontSize: "20px", textDecoration: "none" }}
                  >
                    {" "}
                    SignUp
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-right banner__right pr-0">
            <img src={banner} className="zenbanner" alt="Zen banner" />
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </>
  );
};

export default SignInForm;

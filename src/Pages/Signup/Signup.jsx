import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DataContext from "../../Context/dataContext";
import logo from "../../assets/zen logo.png";
import banner from "../../assets/zen banner.png";
import "./Signup.css";

const Validate = Yup.object().shape({
  firstName: Yup.string()
    .min(6, "Must be atleast 6 characters")
    .max(30, "Must be less than 30 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(6, "Must be atleast 6 characters")
    .max(30, "Must be less than 30 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contactNo: Yup.string()
    .min(10, "Must be atleast 10 characters")
    .max(15, "Must be less than 15 characters")
    .required("Required"),
  qualification: Yup.string()
    .min(1, "Must be atleast 1 character")
    .max(10, "Must be less than 10 characters")
    .required("Required"),
  experience: Yup.string()
    .min(2, "Must be atleast 2 characters")
    .max(35, "Must be less than 35 characters")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be atleast 8 characters")
    .max(15, "Must be less than 15 characters")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Make it More Strong"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Must Match")
    .required("Required"),
});

const SignUpForm = () => {
  const { loading, showPassword, PasswordVisible, handleSignup } =
    useContext(DataContext);

  return (
    <>
      <div className="signupPage">
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
                      firstName: "",
                      lastName: "",
                      email: "",
                      contactNo: "",
                      qualification: "",
                      experience: "",
                      password: "",
                      confirmPassword: "",
                    }}
                    validationSchema={Validate}
                    onSubmit={(values, { resetForm }) => {
                      handleSignup(values);
                      resetForm({ values: "" });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <label className="label-style" htmlFor="firstName">
                            FirstName
                          </label>
                          <Field
                            type="text"
                            name="firstName"
                            placeholder="Eg: John"
                            className="form-control"
                          />
                          {errors.firstName && touched.firstName && (
                            <p style={{ color: "red" }}>{errors.firstName}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="label-style" htmlFor="lastName">
                            LastName
                          </label>
                          <Field
                            type="text"
                            name="lastName"
                            placeholder="Smith"
                            className="form-control"
                          />
                          {errors.lastName && touched.lastName && (
                            <p style={{ color: "red" }}>{errors.lastName}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="label-style" htmlFor="email">
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Eg: johnsmith@abc.com"
                            className="form-control"
                          />
                          {errors.email && touched.email && (
                            <p style={{ color: "red" }}>{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="label-style" htmlFor="contactNo">
                            Contact No
                          </label>
                          <Field
                            type="phone"
                            name="contactNo"
                            placeholder="xxxxxxxxxxxx"
                            className="form-control"
                          />
                          {errors.contactNo && touched.contactNo && (
                            <p style={{ color: "red" }}>{errors.contactNo}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label
                            className="label-style"
                            htmlFor="qualification"
                          >
                            Qualification
                          </label>
                          <Field
                            type="text"
                            name="qualification"
                            placeholder="Eg: B.Tech"
                            className="form-control"
                          />
                          {errors.qualification && touched.qualification && (
                            <p style={{ color: "red" }}>
                              {errors.qualification}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="label-style" htmlFor="experience">
                            Experience
                          </label>
                          <Field
                            type="text"
                            name="experience"
                            placeholder="Eg: fresher"
                            className="form-control"
                          />
                          {errors.experience && touched.experience && (
                            <p style={{ color: "red" }}>{errors.experience}</p>
                          )}
                        </div>
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
                        <div className="form-group">
                          <label
                            className="label-style"
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <Field
                            type={showPassword ? "text" : "confirmPassword"}
                            name="confirmPassword"
                            placeholder="********"
                            className="form-control"
                          />
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <p style={{ color: "red" }}>
                                {errors.confirmPassword}
                              </p>
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
                            "Register"
                          )}
                        </button>
                        <p style={{ fontSize: "18px" }}>
                          Already have an account?{" "}
                          <Link
                            to="/"
                            style={{ fontSize: "20px", textDecoration: "none" }}
                          >
                            Login
                          </Link>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
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

export default SignUpForm;

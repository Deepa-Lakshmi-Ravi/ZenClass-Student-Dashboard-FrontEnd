import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DataContext from "../../Context/dataContext";
import logo from "../../assets/zen logo.png";
import banner from "../../assets/zen banner.png";
import "./forgotPassword.css";

const Validate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPasswordForm = () => {
  const { loading, handleforgotPassword } = useContext(DataContext);

  return (
    <>
      <div className="forgotpage">
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
                    }}
                    validationSchema={Validate}
                    onSubmit={(values, { resetForm }) => {
                      handleforgotPassword(values);
                      resetForm({ values: "" });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <label className="label-style" htmlFor="email">
                            Enter Registered Email
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
          <div className="col-md-4 text-right banner__right pr-0">
            <img src={banner} className="zenbanner" alt="Zen banner" />
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </>
  );
};

export default ForgotPasswordForm;

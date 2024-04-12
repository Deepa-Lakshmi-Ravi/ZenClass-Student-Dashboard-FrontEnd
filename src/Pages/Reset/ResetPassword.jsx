import { useContext } from "react";
import DataContext from "../../Context/dataContext";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Must Match")
    .required("Required"),
});

const ResetPasswordForm = () => {
  const { loading, setLoading } = useContext(DataContext);

  const { randomString, expirationTimestamp } = useParams();
  const navigate = useNavigate();

  const handleresetPassword = async (data) => {
    setLoading(true);
    try {
      const response = await AxiosService.post(`/student/reset-password/${randomString}/${expirationTimestamp}`,data);
      if (response.status === 200) {
        toast.success("Password updated successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message)
    } else {
        console.log(error);
    }
    } finally {
      setLoading(false);
    }
    console.log(handleresetPassword());
  };

  return (
    <>
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
                      confirmPassword: "",
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

                        <div className="form-group">
                          <label
                            className="label-style"
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
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
    </>
  );
};

export default ResetPasswordForm;

import { useContext, useEffect } from "react";
import "./Profile.css";
import DataContext from "../../Context/dataContext";
import { ToastContainer } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
  batch: Yup.string().required("Required"),
  qualification: Yup.string()
    .min(1, "Must be atleast 1 character")
    .max(10, "Must be less than 10 characters")
    .required("Required"),
  experience: Yup.string()
    .min(1, "Must be atleast 1 character")
    .max(35, "Must be less than 35 characters")
    .required("Required"),
  yearofpassing: Yup.string()
    .min(1, "Must be atleast 1 character")
    .max(35, "Must be less than 35 characters")
    .required("Required"),
  noticeperiod: Yup.string().required(false),
  portfolioUrl: Yup.string().required(true),
  githubUrl: Yup.string().required(true),
  resumeUrl: Yup.string().required(true),
});

const Profile = () => {
  const { loggedUser, loading, handleHead, handleProfileUpdate } =
    useContext(DataContext);

  useEffect(() => {
    handleHead("Update Profile");
  }, []);

  return (
    <>
      <section className="profile">
        <div className="container mt-5">
          <Formik
            initialValues={{
              firstName: loggedUser.firstName,
              lastName: loggedUser.lastName,
              email: loggedUser.email,
              contactNo: loggedUser.contactNo,
              qualification: loggedUser.qualification,
              experience: loggedUser.experience,
              yearofpassing: "",
              noticePeriod: "",
              githubUrl: "",
              portfolioUrl: "",
              resumeUrl: "",
            }}
            validationSchema={Validate}
            onSubmit={(values, { resetForm }) => {
              resetForm();
            }}
          >
            <Form>
              <div className="detailsCard">
                <div className="personalDetails">
                  <div className="form-group">
                    <label className="label-style" htmlFor="firstName">
                      FirstName
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Eg: John"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="lastName">
                      LastName
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Smith"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Eg: johnsmith@abc.com"
                      className="form-control"
                      disabled
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="contactNo">
                      Phone
                    </label>
                    <Field
                      type="phone"
                      name="contactNo"
                      id="contactNo"
                      placeholder="xxxxxxxxxxxx"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="detailsCard">
                <div className="personalDetails">
                  <div className="form-group">
                    <label className="label-style" htmlFor="qualification">
                      Qualification
                    </label>
                    <Field
                      type="text"
                      name="qualification"
                      id="qualification"
                      placeholder="Eg: B.Tech"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="yearofpassing">
                      Year of Passing
                    </label>
                    <Field
                      type="text"
                      name="yearofpassing"
                      id="yearofpassing"
                      placeholder=""
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="experience">
                      Years of Experience
                    </label>
                    <Field
                      type="text"
                      name="experience"
                      id="experience"
                      placeholder="Eg: fresher"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="noticeperiod">
                      Notice Period
                    </label>
                    <Field
                      type="text"
                      name="noticePeriod"
                      id="noticePeriod"
                      placeholder="in days"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="detailsCard">
                <div className="personalDetails">
                  <div className="form-group">
                    <label className="label-style" htmlFor="github">
                      Github URL
                    </label>
                    <Field
                      type="text"
                      name="githubUrl"
                      id="githubUrl"
                      placeholder="Example: github.com/<Your-Username>"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="portfolio">
                      Portfolio URL
                    </label>
                    <Field
                      type="text"
                      name="portfolioUrl"
                      id="portfolioUrl"
                      placeholder="Example: yourSite.com"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="label-style" htmlFor="resume">
                      Resume URL
                    </label>
                    <Field
                      type="text"
                      name="resumeUrl"
                      id="resumeUrl"
                      placeholder="Example: docs.google.com/yourResumeParams"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="save-btn-card">
                <div className="save-btn-grid">
                  <button
                    type="submit"
                    className="save-profile btn btn-primary"
                    onClick={handleProfileUpdate}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm text-warning"></span>
                    ) : (
                      "Save"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </section>
    </>
  );
};

export default Profile;

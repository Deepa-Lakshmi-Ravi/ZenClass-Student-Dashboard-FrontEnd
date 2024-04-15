import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import DataContext from "../../Context/dataContext";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const { loggedUser, loading, handleHead, handleProfileUpdate } =
    useContext(DataContext);

  const [formValues, setFormValues] = useState({
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
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleProfileUpdate(formValues);
  };

  useEffect(() => {
    handleHead("Update Profile");
  }, []);

  return (
    <section className="profile">
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="form-cards">
          <div className="detailsCard">
            <div className="personalDetails">
              <div className="form-group">
                <label className="label-style" htmlFor="firstName">
                  FirstName
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Eg: John"
                  className="form-control"
                  required
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                {submitted && !formValues.firstName && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="lastName">
                  LastName
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Smith"
                  className="form-control"
                  required
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {submitted && !formValues.lastName && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Eg: johnsmith@abc.com"
                  className="form-control"
                  disabled
                  required
                  value={formValues.email}
                  onChange={handleChange}
                />
                {submitted && !formValues.email && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="contactNo">
                  Phone
                </label>
                <input
                  type="phone"
                  name="contactNo"
                  id="contactNo"
                  placeholder="xxxxxxxxxxxx"
                  className="form-control"
                  required
                  value={formValues.contactNo}
                  onChange={handleChange}
                />
                {submitted && !formValues.contactNo && (
                  <div className="error-message">Required</div>
                )}
              </div>
            </div>
          </div>
          <div className="detailsCard">
            <div className="personalDetails">
              <div className="form-group">
                <label className="label-style" htmlFor="qualification">
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="Eg: B.Tech"
                  className="form-control"
                  required
                  value={formValues.qualification}
                  onChange={handleChange}
                />
                {submitted && !formValues.qualification && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="yearofpassing">
                  Year of Passing
                </label>
                <input
                  type="text"
                  name="yearofpassing"
                  id="yearofpassing"
                  placeholder=""
                  className="form-control"
                  required
                  value={formValues.yearofpassing}
                  onChange={handleChange}
                />
                {submitted && !formValues.yearofpassing && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="experience">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  placeholder="Eg: fresher"
                  className="form-control"
                  required
                  value={formValues.experience}
                  onChange={handleChange}
                />
                {submitted && !formValues.experience && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="noticeperiod">
                  Notice Period
                </label>
                <input
                  type="text"
                  name="noticePeriod"
                  id="noticePeriod"
                  placeholder="in days"
                  className="form-control"
                  required
                  value={formValues.noticePeriod}
                  onChange={handleChange}
                />
                {submitted && !formValues.noticePeriod && (
                  <div className="error-message">Required</div>
                )}
              </div>
            </div>
          </div>
          <div className="detailsCard">
            <div className="personalDetails">
              <div className="form-group">
                <label className="label-style" htmlFor="github">
                  Github URL
                </label>
                <input
                  type="text"
                  name="githubUrl"
                  id="githubUrl"
                  placeholder="Example: github.com/<Your-Username>"
                  className="form-control"
                  required
                  value={formValues.githubUrl}
                  onChange={handleChange}
                />
                {submitted && !formValues.githubUrl && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="portfolio">
                  Portfolio URL
                </label>
                <input
                  type="text"
                  name="portfolioUrl"
                  id="portfolioUrl"
                  placeholder="Example: yourSite.com"
                  className="form-control"
                  required
                  value={formValues.portfolioUrl}
                  onChange={handleChange}
                />
                {submitted && !formValues.portfolioUrl && (
                  <div className="error-message">Required</div>
                )}
              </div>
              <br />
              <div className="form-group">
                <label className="label-style" htmlFor="resume">
                  Resume URL
                </label>
                <input
                  type="text"
                  name="resumeUrl"
                  id="resumeUrl"
                  placeholder="Example: docs.google.com/yourResumeParams"
                  className="form-control"
                  required
                  value={formValues.resumeUrl}
                  onChange={handleChange}
                />
                {submitted && !formValues.resumeUrl && (
                  <div className="error-message">Required</div>
                )}
              </div>
            </div>
          </div>
          <div className="save-btn-card">
            <div className="save-btn-grid">
              <button type="submit" className="save-profile btn btn-primary">
                {loading ? (
                  <span className="spinner-border spinner-border-sm text-warning"></span>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default Profile;

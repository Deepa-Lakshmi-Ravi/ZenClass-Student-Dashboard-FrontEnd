import { useEffect, useContext } from "react";
import "./Capstone.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DataContext from "../../Context/dataContext";

const Validate = Yup.object({
  frontendCode: Yup.string().url("Enter Valid URL").required("Required"),
  frontendUrl: Yup.string().url("Enter Valid URL").required("Required"),
  backendCode: Yup.string().url("Enter Valid URL").required("Required"),
  backendUrl: Yup.string().url("Enter Valid URL").required("Required"),
});

const Capstone = () => {
  const {
    capStone,
    loading,
    trigger,
    setTrigger,
    loggedUser,
    fetchCapStone,
    handleCapStone,
  } = useContext(DataContext);

  useEffect(() => {
    fetchCapStone();
  }, [trigger, setTrigger]);

  return (
    <>
      <section className="cap-submission">
        <div
          className="cap-container mt-5"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <div className="d-flex justify-content-between flexCont">
            <div className="flexCont-data">
              <div className="title weight-500 pb-2">
                {loggedUser.firstName
                  ? loggedUser.firstName
                  : loggedUser.student.firstName}{" "}
                {loggedUser.lastName
                  ? loggedUser.lastName
                  : loggedUser.student.lastName}
              </div>
              <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                <div className="mx-1">
                  {loggedUser.batch
                    ? loggedUser.batch
                    : loggedUser.student.batch}
                  - Zen Class Student Dashboard
                </div>
              </div>
            </div>
            <div>
              <div className="mx-1 secondaryGreyTextColor text-center pb-2">
                {capStone
                  ? `submitted on ${capStone.submittedOn.slice(0, 10)}`
                  : "Not Submitted"}
              </div>
              <div className="ml-3 mr-1">
                <div className="marktag tasktag mx-1 px-3 rounded">
                  {capStone
                    ? `Capstone score : - ${capStone.score}`
                    : "Pending"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Capstone- 1</h4>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div className="mt-2">
                <div className="px-4 d-flex flex-column gap-1">
                  <div className="title ">
                    {loggedUser.firstName
                      ? loggedUser.firstName
                      : loggedUser.studentData.firstName}{" "}
                    {loggedUser.lastName
                      ? loggedUser.lastName
                      : loggedUser.studentData.lastName}
                  </div>
                  <div className="secondaryGreyTextColor">
                    (
                    {loggedUser.batch
                      ? loggedUser.batch
                      : loggedUser.studentData.batch}{" "}
                    - Capstone Project)
                  </div>
                  <div className="secondaryGreyTextColor">
                    <b>Task Title:</b> Zen Class Student Dashboard
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="marktag tasktag rounded">
                      {capStone ? `score : - ${capStone.score}` : "Pending"}
                    </div>
                  </div>
                  <div className="secondaryGreyTextColor">
                    {capStone
                      ? `submitted on ${capStone.submittedOn.slice(0, 10)}`
                      : "Not Submitted"}
                  </div>
                </div>
                <div className="mx-1 secondaryGreyTextColor">
                  <div className="col-12">
                    <div className="mx-3 mt-1">
                      <strong>Description :</strong>
                    </div>
                    <div className="mx-2 py-1 px-2 ">
                      <p>
                        To identify and implement the Capstone project as the
                        title given below by meeting all the necessary
                        requirements.
                      </p>
                      <p>
                        <strong>Any specifications on the design?</strong>
                      </p>
                      <ul>
                        <li>Front-end: Reactjs</li>
                        <li>Back-end: Nodejs</li>
                        <li>Database: MongoDB</li>
                        <li>
                          {" "}
                          <strong>Requirements:</strong>{" "}
                        </li>
                        <li>The project should achieve the CODE QUALITY</li>
                        <li>Use fonts/icons if it’s required in the design.</li>
                        <li>
                          The use of various charts is required in the design.
                        </li>
                        <li>
                          The use of bootstrap/ material CSS is required in the
                          design
                        </li>
                      </ul>
                      <p>
                        <strong>How do I submit my work?</strong>
                      </p>
                      <ul>
                        <li>
                          Push all your work files to GitHub in two different
                          repositories as given below
                        </li>
                        <li>Front-end repo name project-name-frontend.</li>
                        <li>Back-end repo name project-name-backend.</li>
                        <li>
                          Deploy your front-end application on
                          Netlify(https://www.netlify.com) and back-end
                          application on Render(https://render.com/).
                        </li>
                      </ul>
                      <p>
                        <strong>
                          Any basic hints/links/reference sites to solve?
                        </strong>
                      </p>
                      <p>
                        https://getbootstrap.com/docs/4.4/getting-started/introduction/
                      </p>
                      <p>https://www.chartjs.org/</p>
                      <p>https://jwt.io/introduction/</p>
                      <p>https://react-bootstrap.github.io/</p>
                      <p>https://materializecss.com/</p>
                      <p>https://tailwindcss.com/</p>
                      <p>https://expressjs.com/</p>

                      <p>
                        <strong>Terms and Conditions?</strong>
                      </p>
                      <ul>
                        <ul>
                          <li>
                            You agree to not share this confidential document
                            with anyone.&nbsp;
                          </li>
                          <li>
                            You agree to open-source your code (it may even look
                            good on your profile!). Do not mention our company’s
                            name anywhere in the code.
                          </li>
                          <li>
                            We will never use your source code under any
                            circumstances for any commercial purposes; this is
                            just a basic assessment task.
                          </li>
                          <li>
                            For capstone, the use case has to be identified by
                            the developer.
                          </li>
                        </ul>
                      </ul>
                      <p>
                        NOTE: Any violation of Terms and conditions is strictly
                        prohibited. You are bound to adhere to it.
                      </p>
                    </div>
                  </div>
                </div>
                {capStone && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Submission</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="codeName">Front-end Source code</td>
                        <td>
                          <a href={capStone.frontendCode} target="_blank">
                            {capStone.frontendCode} <FaExternalLinkAlt />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Front-end Deployed URL</td>
                        <td>
                          <a href={capStone.frontendUrl} target="_blank">
                            {capStone.frontendUrl} <FaExternalLinkAlt />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Back-end Source code</td>
                        <td>
                          <a href={capStone.backendCode} target="_blank">
                            {capStone.backendCode} <FaExternalLinkAlt />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Back-end Deployed URL</td>
                        <td>
                          <a href={capStone.backendUrl} target="_blank">
                            {capStone.backendUrl} <FaExternalLinkAlt />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="codeName">Comments</td>
                        <td>{capStone.comment}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {!capStone && (
                  <Formik
                    initialValues={{
                      frontendCode: "",
                      frontendUrl: "",
                      backendCode: "",
                      backendUrl: "",
                      comment: "",
                    }}
                    validationSchema={Validate}
                    onSubmit={(values, { resetForm }) => {
                      handleCapStone(values);
                      resetForm({ values: "" });
                    }}
                  >
                    <Form>
                      <table
                        className="table"
                        style={{
                          backgroundColor: "#fff",
                          width: "100% !important",
                          margin: "0",
                          padding: "0",
                          borderRadius: ".3125rem",
                          boxShadow: "0 2px 3px 0 hsla(0,0%,61.2%,.16)",
                          color: "#212529",
                          border: "1px solid #f8f6f9",
                          borderCollapse: "collapse",
                        }}
                      >
                        <thead
                          style={{
                            display: "table",
                            width: "100%",
                            tableLayout: "fixed",
                            color: "#212529",
                            fontSize: "18px",
                          }}
                        >
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <th
                              scope="col"
                              style={{
                                verticalAlign: "bottom",
                                borderBottom: "2px solid #dee2e6",
                              }}
                            >
                              Code{" "}
                            </th>
                            <th
                              scope="col"
                              style={{
                                verticalAlign: "bottom",
                                borderBottom: "2px solid #dee2e6",
                              }}
                            >
                              Submission{" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          style={{
                            display: "block",
                            overflow: "auto",
                            tableLayout: "fixed",
                            maxHeight: "50vh",
                          }}
                        >
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <td
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%",
                              }}
                            >
                              <label className="label-style">
                                Front End Source Code
                              </label>
                              <Field
                                className="input"
                                name="frontendCode"
                                id="frontendCode"
                                type="url"
                              />
                            </td>
                          </tr>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <td
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%",
                              }}
                            >
                              <label className="label-style">
                                Front End Deployed URL
                              </label>
                              <Field
                                className="input"
                                name="frontendUrl"
                                id="frontendUrl"
                                type="url"
                              />
                            </td>
                          </tr>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <td
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%",
                              }}
                            >
                              <label className="label-style">
                                Back End Source Code
                              </label>
                              <Field
                                className="input"
                                name="backendCode"
                                id="backendCode"
                                type="url"
                              />
                            </td>
                          </tr>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <td
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%",
                              }}
                            >
                              <label className="label-style">
                                Front End Deployed URL
                              </label>
                              <Field
                                className="input"
                                name="backendUrl"
                                id="backendUrl"
                                type="url"
                              />
                            </td>
                          </tr>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <td
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%",
                              }}
                            >
                              <label className="label-style">Comments</label>
                              <Field
                                placeholder="leave your comments here"
                                name="comments"
                                id="comments"
                                type="text"
                                className="input"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="capstone-btn-container">
                        <button className="submit-capstone" type="submit">
                          {loading ? (
                            <span className="spinner-border spinner-border-sm text-warning"></span>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </Form>
                  </Formik>
                )}
                <div className="col-12 marksContainer">
                  <div className="row d-flex align-itmes-center justify-content-between mx-1">
                    <div className="col-12">
                      <div className="mx-2 mt-3 text-warning">
                        <strong>Warning</strong>: 2 mark may be deducted
                        automatically from your total score if your submission
                        is beyond the deadline
                      </div>
                    </div>
                  </div>
                  <hr className="containerDivider mx-1" />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger close-btn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </section>
    </>
  );
};

export default Capstone;

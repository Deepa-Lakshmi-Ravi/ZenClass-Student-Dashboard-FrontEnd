import { useEffect, useContext } from "react";
import "./Portfolio.css";
import DataContext from "../../Context/dataContext";
import { ToastContainer } from "react-toastify";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";

const Validate = Yup.object({
  portfolioUrl: Yup.string().url().required("Required"),
  githubUrl: Yup.string().url().required("Required"),
  resumeUrl: Yup.string().url().required("Required"),
});

const Portfolio = () => {
  const {
    portfolio,
    loading,
    trigger,
    setTrigger,
    fetchPortfolio,
    handlePortfolio,
  } = useContext(DataContext);

  useEffect(() => {
    fetchPortfolio();
  }, [trigger, setTrigger]);

  return (
    <>
      <div className="portfolio-head"></div>
      <section className="portfolio">
        <div className="row mx-0">
          <div className="col-4 portfolio-area">
            <Formik
              initialValues={{
                portfolioUrl: "",
                githubUrl: "",
                resumeUrl: "",
              }}
              validationSchema={Validate}
              onSubmit={(values, { resetForm }) => {
                handlePortfolio(values);
                resetForm({ values: "" });
              }}
            >
              <Form
                className="d-flex justify-content-center flex-column"
                autoComplete="off"
              >
                <div className="widthfit mx-3 px-2">
                  <label className="label-style">PortFolio URL</label>
                  <br />
                  <Field
                    name="portfolioUrl"
                    id="portfolioUrl"
                    className="formInputs"
                    placeholder="Enter Portfolio URL"
                    type="url"
                  />
                  <label className="label-style">Github URL</label>
                  <br />
                  <Field
                    name="githubUrl"
                    id="githubUrl"
                    className="formInputs"
                    placeholder="Enter Github URL"
                    type="url"
                  />
                  <label className="label-style">Resume URL</label>
                  <br />
                  <Field
                    name="resumeUrl"
                    id="resumeUrl"
                    className="formInputs"
                    placeholder="Enter Resume URL"
                    type="url"
                  />
                </div>
                <br />
                <div className="d-flex px-4">
                  <button type="submit" className="button">
                    {loading ? (
                      <span className="spinner-border spinner-border-sm text-warning"></span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </Form>
            </Formik>
            <p className="note">
              <span style={{ color: "black", fontWeight: "bold" }}> Note </span>
              : You Wont be Able to Submit When the Portfolio is under
              <b> Review</b> or <b> Reviewed</b>.
            </p>
          </div>
          <div className=" col-8 review-area text-center">
            <div className="border-bottom text-center p-4">
              <h3 className="review-header" style={{ color: "#545454" }}>
                Portfolio Review
              </h3>
            </div>
            <div className="row secondaryGreyTextColor">
              <div className="col-12 col-sm-6">
                <div className=" col-6 port-item my-4 d-flex flex-column">
                  <span className="port-grey">Status:</span>
                  <span>
                    {portfolio ? `${portfolio.status}` : "Not Submitted"}
                  </span>
                </div>
                <div className=" col-6 port-item my-4 d-flex flex-column">
                  <span className="port-grey">Comment:</span>
                  <span>
                    {portfolio ? `${portfolio.comment}` : "Not Submitted"}
                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="port-item my-4 d-flex flex-column">
                  <span className="port-grey">Date:</span>
                  <span>
                    {portfolio
                      ? `${portfolio.submittedOn.slice(0, 10)}`
                      : "Not Submitted"}
                  </span>
                </div>
                <div className="port-item my-4 d-flex flex-column ">
                  <span className="port-grey">Reviewed By:</span>
                  <span>
                    {portfolio ? `${portfolio.reveiwedBy}` : "Not Submitted"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </section>
    </>
  );
};

export default Portfolio;

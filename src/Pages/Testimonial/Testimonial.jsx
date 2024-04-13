import { useEffect, useContext } from "react";
import "./Testimonial.css";
import { ToastContainer } from "react-toastify";
import { BiPlus } from "react-icons/bi";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import DataContext from "../../Context/dataContext";

const Validate = Yup.object({
  image: Yup.string().required("Required"),
  videoUrl: Yup.date().required("Required"),
  desc: Yup.string()
    .min(20, "Must be atleast 20 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
});

const Testimonial = () => {
  const {
    testimonial,
    loading,
    trigger,
    setTrigger,
    fetchTestimonial,
    handleAddTestimonial,
    handleCancelTestimonial,
  } = useContext(DataContext);

  useEffect(() => {
    fetchTestimonial();
  }, [trigger, setTrigger]);

  return (
    <>
      <section className="testimonial">
        <div className="btn-container">
          <button
          style={{
            padding:"7px",
            borderRadius:"10px",
            width:"15%"
          }}
            className="addBtn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <BiPlus />
            Add Testimonial
          </button>
        </div>
        <br />
        {testimonial &&
          testimonial.map((data) => {
            return (
              <div
                className="testimonial-container"
                key={data._id}
                data-bs-toggle="modal"
                data-bs-target={`#testimonialModal${data._id}`}
              >
                <div className="flexCont">
                  <div className="text-center">
                    <div className="title weight-500">Image</div>
                    <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                      <div className="mx-1">{data.image}</div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div className="mx-1 secondaryGreyTextColor">
                      Video URL {data.videoUrl}
                    </div>
                    <div className="ml-3 mr-1">
                      <div className="marktag mx-1 px-3 rounded">
                        Description : - {data.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Create Testimonial</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body  d-flex flex-column gap-1">
                <Formik
                  initialValues={{
                    image: "",
                    videoUrl: "",
                    desc: "",
                  }}
                  validationSchema={Validate}
                  onSubmit={(values, { resetForm }) => {
                    handleAddTestimonial(values);
                    resetForm({ values: "" });
                  }}
                >
                  <Form className='className="d-flex justify-content-center w-75 flex-column mt-2'>
                    <label className="label-style">Upload Photo</label>
                    <br />
                    <Field
                      placeholder="Enter image Url"
                      name="image"
                      id="image"
                      className="form-input"
                      type="url"
                    />
                    <label className="label-style">Video URL</label>
                    <br />
                    <Field
                      placeholder="Enter video Url"
                      name="videoUrl"
                      id="videoUrl"
                      className="form-input"
                      type="url"
                    />
                    <label className="label-style">Description</label>
                    <br />
                    <Field
                      placeholder="Enter description..."
                      name="desc"
                      id="desc"
                      className="form-input"
                      type="textarea"
                    />
                    <div className="modal-footer">
                      <div className="testi-btn text-center w-100">
                        <button
                          className="btn btn-danger w-25 clo-btn"
                          data-bs-dismiss="modal"
                          style={{ fontWeight: "500", fontSize: "1.1rem" }}
                        >
                          Close
                        </button>&nbsp; &nbsp; &nbsp;
                        <button type="submit" className="submit-btn w-25">
                          {loading ? (
                            <span className="spinner-border spinner-border-sm text-warning"></span>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        {testimonial &&
          testimonial.map((data) => {
            return (
              <div
                className="modal"
                id={`testimonialModal${data._id}`}
                key={data._id}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">
                        Confirm Testimonial Cancellation{" "}
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <button
                        type="reset"
                        className="btn submit__btn"
                        data-bs-dismiss="modal"
                        onClick={() => handleCancelTestimonial(data._id)}
                      >
                        Confirm
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {!testimonial.length && (
          <h3 className="text-center testimonial-text mt-3">
            You have not submitted testimonial yet.
          </h3>
        )}
        <ToastContainer
          position="top-center"
          autoClose={3000}
        />
      </section>
    </>
  );
};

export default Testimonial;

import { useEffect, useContext } from "react";
import "./Leave.css";
import DataContext from "../../Context/dataContext";
import { ToastContainer } from "react-toastify";
import { BiPlus } from "react-icons/bi";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";

const Validate = Yup.object({
  reason: Yup.string()
    .min(6, "Must be at least 6 Characters")
    .required("Required"),
  appliedOn: Yup.date().required("Required"),
});

const Leave = () => {
  const {
    loading,
    leave,
    trigger,
    setTrigger,
    fetchLeave,
    handleAddLeave,
    handleLeaveCancel,
    handleHead,
  } = useContext(DataContext);

  useEffect(() => {
    handleHead("Leave Applications");
    fetchLeave();
  }, [trigger, setTrigger]);

  return (
    <>
      <section className="leave">
        <div className="btn-container">
          <button
            className=" addBtn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <BiPlus />
            Add
          </button>
        </div>
        <br />
        {leave &&
          leave.map((data) => {
            return (
              <div
                className="leave-container"
                key={data._id}
                data-bs-toggle="modal"
                data-bs-target={`#leaveModel${data._id}`}
              >
                <div className="flexCont">
                  <div className="text-center">
                    <div className="title weight-500">Reason</div>
                    <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                      <div className="mx-1">{data.reason}</div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div className="mx-1 secondaryGreyTextColor">
                      Applied on {data.appliedOn}
                    </div>
                    <div className="ml-3 mr-1">
                      <div className="marktag mx-1 px-3 rounded">
                        Status : - {data.status}
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
                <h4 className="modal-title">Add Leave</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body  d-flex flex-column gap-1">
                <Formik
                  initialValues={{
                    reason: "",
                    appliedOn: "",
                  }}
                  validationSchema={Validate}
                  onSubmit={(values, { resetForm }) => {
                    handleAddLeave(values);
                    resetForm({ values: "" });
                  }}
                >
                  <Form className="d-flex justify-content-center w-75 flex-column mt-2">
                    <label className="label-style">Applied On</label>
                    <Field
                      name="appliedOn"
                      id="appliedOn"
                      className="form-input"
                      type="date"
                    />
                    <br />
                    <label className="label-style">Reason</label>
                    <Field
                      placeholder="Enter Reason"
                      name="reason"
                      id="reason"
                      className="form-input"
                      type="textarea"
                    />
                    <br />
                    <div className="modal-footer">
                      <div className="w-100">
                        <button
                          className="btn btn-danger w-25"
                          data-bs-dismiss="modal"
                          style={{ padding: "9px" }}
                        >
                          Close
                        </button>
                        &nbsp; &nbsp;
                        <button type="submit" className="submit-leave-btn w-25">
                          {loading ? (
                            <span className="spinner-border spinner-border-sm text-warning"></span>
                          ) : (
                            "Create"
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
        {leave &&
          leave.map((data) => {
            return (
              <div
                className="modal"
                id={`leaveModel${data._id}`}
                key={data._id}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">
                        Confirm Leave Cancellation{" "}
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
                        className="btn submit-btn"
                        data-bs-dismiss="modal"
                        onClick={() => handleLeaveCancel(data._id)}
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
        {!leave.length && (
          <h3 className="text-center mt-3">No Leave Request raised</h3>
        )}
        <ToastContainer position="top-center" autoClose={3000} />
      </section>
    </>
  );
};

export default Leave;

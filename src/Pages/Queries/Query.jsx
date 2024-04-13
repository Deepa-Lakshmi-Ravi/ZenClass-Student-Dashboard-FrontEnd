import { useEffect, useContext } from "react";
import "./Query.css";
import DataContext from "../../Context/dataContext";
import { ToastContainer } from "react-toastify";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { BiPlus } from "react-icons/bi";

const Validate = Yup.object({
  queryTitle: Yup.string()
    .min(6, "Must be at least 6 Characters")
    .required("Required"),
  queryDesc: Yup.string()
    .min(6, "Must be at least 6 Characters")
    .required("Required"),
});

const Query = () => {
  const {
    loading,
    query,
    trigger,
    setTrigger,
    fetchQuery,
    handleAddQuery,
    handleQueryCancel,
    handleHead,
  } = useContext(DataContext);
  useEffect(() => {
    handleHead("My Queries");
    fetchQuery();
  }, [trigger, setTrigger]);

  return (
    <>
      <section className="query">
        <div className="btn-container">
          <button
          style={{
            padding:"7px",
            borderRadius:"10px",
            width:"10%"
          }}
            className="addBtn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <BiPlus />
            Add Query
          </button>
        </div>
        <br />
        {query &&
          query.map((data) => {
            return (
              <div
                className="query-container"
                key={data._id}
                data-bs-toggle="modal"
                data-bs-target={`#${data._id}`}
              >
                <div className="d-flex flex-column gap-2 align-items-center">
                  <div>
                    <div className="query-group">
                      <div className="title weight-500">Query Title:</div>
                      <div className="secondaryGreyTextColor">
                        {data.queryTitle}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="query-group">
                      <div className="title weight-500">Query Description:</div>
                      <div className="secondaryGreyTextColor">
                        {data.queryDesc}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <div className="secondaryGreyTextColor">
                      Applied on {data.appliedOn.slice(0, 10)}
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
                <h4 className="modal-title">Add Query</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <Formik
                  initialValues={{
                    queryTitle: "",
                    queryDesc: "",
                  }}
                  validationSchema={Validate}
                  onSubmit={(values, { resetForm }) => {
                    handleAddQuery(values);
                    resetForm({ values: "" });
                  }}
                >
                  <Form className="query-form" style={{ padding: "40px" }}>
                    <label className="query-title">Query Title</label>
                    <br />
                    <Field
                      className="query-field"
                      placeholder="Enter Title/Topic"
                      name="queryTitle"
                      id="queryTitle"
                      type="text"
                    />
                    <br />
                    <label className="query-desc">Query Description</label>
                    <br />
                    <Field
                      className="query-field"
                      placeholder="Enter Description"
                      name="queryDesc"
                      id="queryDesc"
                      type="textarea"
                    />
                    <br />
                    <br />
                    <div className="modal-footer text-center">
                      <div className="query-btn-container">
                        <button
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                          style={{ padding: "10px 24px" }}
                        >
                          Cancel
                        </button>
                        &nbsp; &nbsp;
                        <button
                          type="submit"
                          className="btn submit-btn "
                          style={{
                            backgroundColor: "rgb(75, 13, 186)",
                            padding: "10px 24px",
                            color: "#fff",
                          }}
                        >
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
        {query &&
          query.map((data) => {
            return (
              <div className="modal" key={data._id} id={data._id}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">
                        Delete Query - {data.queryTitle}{" "}
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body  d-flex flex-column gap-1">
                      <div className="d-flex gap-3">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleQueryCancel(data._id)}
                          data-bs-dismiss="modal"
                        >
                          Confirm Delete
                        </button>
                        <button
                          className="btn btn-info"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {!query.length && (
          <h3 className="text-center mt-3">No Queries raised</h3>
        )}
        <ToastContainer position="top-center" autoClose={3000} />
      </section>
    </>
  );
};

export default Query;

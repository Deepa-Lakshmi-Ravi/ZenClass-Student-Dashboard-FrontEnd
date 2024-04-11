import { useContext, useEffect } from "react";
import "./Mentor.css";
import TaskEvaluationUrl from "../../Components/TaskEvaluation/taskEvaluation";
import { ToastContainer } from "react-toastify";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import DataContext from "../../Context/dataContext";

const Validate = Yup.object({
  score: Yup.number()
    .typeError("Please enter number value only")
    .required("Required")
    .max(10, "maximum score 10")
    .moreThan(-1, "Negative values not accepted"),
  id: Yup.string(),
});

const Mentor = () => {
  const {
    loading,
    trigger,
    setTrigger,
    DBTask,
    fetchAllTask,
    handleTaskScore,
    handleLogout,
  } = useContext(DataContext);

  useEffect(() => {
    fetchAllTask();
  }, [trigger, setTrigger]);

  return (
    <>
      <div className="mentor">
        <header className="top-header d-flex align-items-center justify-content-between">
          <h1 className="heading ">Mentor</h1>
          <div className="user-profile d-flex align-items-center gap-3">
            <h5 className="user-name">Mentor</h5>
            <div className="flex-icons">
              <div className="d-flex align-items-center justify-content-center dropdown">
                <span
                  className="dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <div className="user-logo d-flex align-items-center justify-content-center">
                    ZM
                  </div>
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <section className="task-submission">
          <h2 className="container task-heading rounded p-2 text-center">
            Task Evaluation
          </h2>
          {DBTask &&
            DBTask.map((item) => {
              return (
                <div
                  className="task-container"
                  key={item._id}
                  data-bs-toggle="modal"
                  data-bs-target={`#${item._id}`}
                >
                  <div className="flexCont">
                    <div className="flexCont-data">
                      <div className="title weight-500">
                        Student-B52WE-TAMIL
                      </div>
                      <div
                        className="row 
                                d-flex 
                                align-items-center 
                                justify-content-evenly 
                                secondaryGreyTextColor"
                      >
                        <div className="mx-1">id:-{item._id}</div>
                        <div className="mx-1"></div>
                        <div className="">{item.title}</div>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="secondaryGreyTextColor">
                        submitted on {item.submittedOn.slice(0, 10)}
                      </div>
                      <div className="ml-3 mr-1">
                        <div className="marktag tasktag mx-1 px-3 rounded">
                          Need to Evaluate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {DBTask &&
            DBTask.map((item) => {
              return (
                <div className="modal" key={item._id} id={`${item._id}`}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">{item.title}</h4>
                      </div>
                      <div className="modal-body">
                        <TaskEvaluationUrl item={item} />
                      </div>
                      <div className="modal-body flex-column gap-1">
                        <Formik
                          initialValues={{
                            score: "",
                            id: item._id,
                          }}
                          validationSchema={Validate}
                          onSubmit={(values, { resetForm }) => {
                            handleTaskScore(values);
                            resetForm({ values: "" });
                          }}
                        >
                          <Form className='className="d-flex text-center justify-content-center w-100 flex-column mt-2'>
                            <label>Student Id</label>
                            <Field disabled name="id" id="id" type="text" />
                            <label>Score</label>
                            <Field
                              placeholder="Enter Score"
                              name="score"
                              id="score"
                              type="text"
                            />
                            <div className="modal-footer text-center">
                              <div className="text-center w-100">
                                <button
                                  type="submit"
                                  className="btn submit-btn w-100"
                                >
                                  {loading ? (
                                    <span className="spinner-border spinner-border-sm text-warning"></span>
                                  ) : (
                                    "Update"
                                  )}
                                </button>
                              </div>
                            </div>
                          </Form>
                        </Formik>
                        <div className="text-center">
                          <button
                            className="btn btn-danger w-25"
                            onClick={() => setTrigger((prev) => prev + 1)}
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {!DBTask.length && (
            <h3 className="text-center mt-3">
              No task Avaialble for Evaluation
            </h3>
          )}
        </section>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </>
  );
};

export default Mentor;

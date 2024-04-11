import { useEffect, useContext } from "react";
import "./Roadmap.css";
import DataContext from "../../Context/dataContext";
import { roadMap, roadMapData, roadMapRes } from "../../../utils/RoadmapData";
import { ToastContainer } from "react-toastify";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const RoadMap = () => {
  const {
    loading,
    head,
    width,
    day,
    setDay,
    data,
    setData,
    flag,
    setFlag,
    frontEndCode,
    setFrontEndCode,
    frontEndURL,
    setFrontEndURL,
    backEndCode,
    setBackEndCode,
    backEndURL,
    setBackEndURL,
    handleTask,
    setHead,
  } = useContext(DataContext);

  useEffect(() => {
    setData(roadMapData[day]);
    setFrontEndCode("");
    setFrontEndURL("");
    setBackEndCode("");
    setBackEndURL("");
  }, [day, head]);

  useEffect(() => {
    setHead("Class");
  }, []);

  return (
    <>
      <section className="roadmap">
        <div className="main-container p-2 d-flex justify-content-between gap-3">
          <div className="left">
            <div
              className="class-head d-flex px-3 
                    justify-content-between align-items-center"
            >
              {day === 0 ? (
                <h3 className="classhead m-0 text-white">
                  Join the class on time!
                </h3>
              ) : (
                <>
                  <h3 className="classhead m-0 text-white">Join the Class</h3>
                  <a
                    className="recording-link text-dark"
                    href={data.link}
                    target="_blank"
                  >
                    <button
                      className="play-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      Join Class
                    </button>
                  </a>
                </>
              )}
            </div>
            <div className="session-container">
              <div className="session-area">
                <span className="session-details">
                  <span className="session-title">{data.title}</span>
                  <br />
                  {data.time}
                </span>
                <hr />
                <div className="session-content">Contents:</div>
                <div className="ml-3">
                  <span className="session-content-details text-secondary">
                    {data.content}
                  </span>
                </div>
                <div className="session-content mt-3">Pre-read:</div>
                <div className="ml-3">
                  <span className="session-content-details text-secondary">
                    {data.preread}
                  </span>
                </div>
              </div>
            </div>
            {data.activity !== "" ? (
              <div className="activity ml-1 mt-3 mb-2">Activities</div>
            ) : (
              ""
            )}
            {data.activity && (
              <div className="session-container">
                <div className="session-area">
                  <div className="accordion">
                    <div className="d-flex justify-content-between">
                      <div className="task-link">{data.activity}</div>
                      <span
                        className="task-toggle text-white"
                        data-bs-toggle="collapse"
                        data-bs-target="#demo"
                        onClick={() => setFlag(!flag)}
                      >
                        {flag ? <FaAngleDown /> : <FaAngleUp />}
                      </span>
                    </div>
                    <div className="collapse" id="demo">
                      <div className="card-body">
                        <div className="tagsList">
                          <div className="tagTitle">Tags:</div>
                          {data.tags !== "" &&
                            data.tags.map((tag, index) => (
                              <div key={index} className="tagItem">
                                {tag}
                              </div>
                            ))}
                        </div>
                        <div className="p-0">
                          <form onSubmit={handleTask}>
                            <div
                              className="task-area"
                              style={{ padding: "16px" }}
                            >
                              <div className="submission">
                                <div className="form-group mt-2">
                                  {(data.task === "fs" ||
                                    data.task === "fe" ||
                                    data.task === "fb") && (
                                    <>
                                      <label
                                        htmlFor="FrontEndSourceCode"
                                        className="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          className="formInputs"
                                          id="FrontEndSourceCode"
                                          name="FrontEndSourceCode"
                                          placeholder="Enter Front-end Source code link"
                                          type="url"
                                          required
                                          value={frontEndCode}
                                          onChange={(e) =>
                                            setFrontEndCode(e.target.value)
                                          }
                                          autoComplete="off"
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>
                                {(data.task === "fe" || data.task === "fb") && (
                                  <>
                                    <label
                                      htmlFor="FrontEndDeployedURL"
                                      className="label-style mb-0"
                                    >
                                      Front-end Depolyed URL
                                    </label>
                                    <div>
                                      <input
                                        className="formInputs"
                                        name="FrontEndDeployedURL"
                                        id="FrontEndDeployedURL"
                                        placeholder="Enter Front-end Depolyed URL"
                                        required
                                        value={frontEndURL}
                                        onChange={(e) =>
                                          setFrontEndURL(e.target.value)
                                        }
                                        type="url"
                                        autoComplete="off"
                                      />
                                    </div>
                                  </>
                                )}
                                {(data.task === "bs" ||
                                  data.task === "be" ||
                                  data.task === "fb") && (
                                  <>
                                    <label
                                      htmlFor="BackEndSourceCode"
                                      className="label-style mb-0"
                                    >
                                      Back-end Source code
                                    </label>
                                    <div>
                                      <input
                                        className="formInputs"
                                        id="BackEndSourceCode"
                                        name="BackEndSourceCode"
                                        placeholder="Enter Back-end Source code"
                                        required
                                        value={backEndCode}
                                        onChange={(e) =>
                                          setBackEndCode(e.target.value)
                                        }
                                        type="url"
                                        autoComplete="off"
                                      />
                                    </div>
                                  </>
                                )}
                                {(data.task === "be" || data.task === "fb") && (
                                  <>
                                    <label
                                      htmlFor="BackEndDeployedURL"
                                      className="label-style mb-0"
                                    >
                                      Back-end Depolyed URL
                                    </label>
                                    <div>
                                      <input
                                        className="formInputs"
                                        name="BackEndDeployedURL"
                                        id="BackEndDeployedURL"
                                        placeholder="Enter Back-end Depolyed URL"
                                        required
                                        value={backEndURL}
                                        onChange={(e) =>
                                          setBackEndURL(e.target.value)
                                        }
                                        type="url"
                                        autoComplete="off"
                                      />
                                    </div>
                                  </>
                                )}
                              </div>
                              <div className=" task-submitBtn">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  {loading ? (
                                    <span className="spinner-border spinner-border-sm text-warning"></span>
                                  ) : (
                                    "Submit"
                                  )}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <div className="roadmap-container justify-self-center">
              <div className="roadmap-area">
                <div className="progress-head">Sessions Roadmap</div>
                <div className="sessionsContainer">
                  {width >= 992
                    ? roadMap.map((item) => {
                        return (
                          <div
                            key={item.no}
                            className="roadmap-icon-container completed"
                            onClick={() => setDay(Number(item.no))}
                          >
                            <h6>{item.no}</h6>
                            <div className={item.dir}></div>
                          </div>
                        );
                      })
                    : roadMapRes.map((item) => {
                        return (
                          <div
                            key={item.no}
                            className="roadmap-icon-container completed"
                            onClick={() => setDay(Number(item.no))}
                          >
                            <h6>{item.no}</h6>
                            <div className={item.dir}></div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </>
  );
};

export default RoadMap;

import "./Requirement.css";
import { useContext, useEffect } from "react";
import DataContext from "../../Context/dataContext";
const Requirement = () => {
  const { handleHead } = useContext(DataContext);

  useEffect(() => {
    handleHead("Requirements");
  }, []);
  return (
    <>
      <div className="require-container">
        <div className="require-nav-bar">
          <div className="empty"></div>
          <div>
            <input type="text" name="search-box" className="search-box" />
          </div>
        </div>
        <div className="require-content">
          <div className="p-3">
            <div className="req-item">
              <div className="comp-tile-item-a">
                <div className="company-logo"></div>
                <div className="title-links">
                  <h3>FabGreen Technologies</h3>
                  <div className="links">
                    <i className="fa-solid fa-link"></i>
                    <a
                      href="https://www.fabgreentechnologies.com/"
                      target="_blank"
                    >
                      https://www.fabgreentechnologies.com/
                    </a>
                  </div>
                </div>
              </div>
              <div className="comp-tile-item-b">
                <span className="req-title">Role:</span>
                React Js Developer
              </div>
              <div className="comp-tile-item-c">
                <span className="req-title">Nature of Job:</span>
                Full-time
              </div>
              <div className="comp-tile-item-d">
                <span className="req-title">Deadline:</span>
                No Deadline
              </div>
              <div className="d-flex justify-content-center align-items-center comp-tile-item"></div>
              <div className="comp-tile-item-e"></div>
              <div className="comp-tile-item-f">
                <span className="req-title">CTC:</span>
                150000
              </div>
              <div className="comp-tile-item-g">
                <span className="req-title">Openings:</span>1
              </div>
              <div className="comp-tile-item-h">
                <span className="req-title">Program:</span>
                Full Stack Development
              </div>
              <div className="comp-tile-item-i"></div>
            </div>
            <div className="req-item">
              <div className="comp-tile-item-a">
                <div className="company-logo"></div>
                <div className="title-links">
                  <h3>Es Magico</h3>
                  <div className="links">
                    <i className="fa-solid fa-link"></i>
                    <a href="https://www.esmagico.in/" target="_blank">
                      https://www.esmagico.in/
                    </a>
                  </div>
                </div>
              </div>
              <div className="comp-tile-item-b">
                <span className="req-title">Role:</span>
                Full Stack Developer
              </div>
              <div className="comp-tile-item-c">
                <span className="req-title">Nature of Job:</span>
                Full-time
              </div>
              <div className="comp-tile-item-d">
                <span className="req-title">Deadline:</span>
                No Deadline
              </div>
              <div className="d-flex justify-content-center align-items-center comp-tile-item"></div>
              <div className="comp-tile-item-e"></div>
              <div className="comp-tile-item-f">
                <span className="req-title">CTC:</span>
                1500000
              </div>
              <div className="comp-tile-item-g">
                <span className="req-title">Openings:</span>1
              </div>
              <div className="comp-tile-item-h">
                <span className="req-title">Program:</span>
                Full Stack Development
              </div>
              <div className="comp-tile-item-i"></div>
            </div>
            <div className="req-item">
              <div className="comp-tile-item-a">
                <div className="company-logo"></div>
                <div className="title-links">
                  <h3>Devtestingtesting</h3>
                  <div className="links">
                    <i className="fa-solid fa-link"></i>
                    <a href="https://www.guvi.in/" target="_blank">
                      https://www.guvi.in/
                    </a>
                  </div>
                </div>
              </div>
              <div className="comp-tile-item-b">
                <span className="req-title">Role:</span>
                Web Developer
              </div>
              <div className="comp-tile-item-c">
                <span className="req-title">Nature of Job:</span>
                Full-time
              </div>
              <div className="comp-tile-item-d">
                <span className="req-title">Deadline:</span>
                No Deadline
              </div>
              <div className="d-flex justify-content-center align-items-center comp-tile-item"></div>
              <div className="comp-tile-item-e"></div>
              <div className="comp-tile-item-f">
                <span className="req-title">CTC:</span>
                720000
              </div>
              <div className="comp-tile-item-g">
                <span className="req-title">Openings:</span>4
              </div>
              <div className="comp-tile-item-h">
                <span className="req-title">Program:</span>
                Full Stack Development
              </div>
              <div className="comp-tile-item-i"></div>
            </div>
            <div className="req-item">
              <div className="comp-tile-item-a">
                <div className="company-logo"></div>
                <div className="title-links">
                  <h3>Metricoid Technology Solutions</h3>
                  <div className="links">
                    <i className="fa-solid fa-link"></i>
                    <a href="https://metricoidtech.com/" target="_blank">
                      https://metricoidtech.com/
                    </a>
                  </div>
                </div>
              </div>
              <div className="comp-tile-item-b">
                <span className="req-title">Role:</span>
                MERN Stack Developer
              </div>
              <div className="comp-tile-item-c">
                <span className="req-title">Nature of Job:</span>
                Full-time
              </div>
              <div className="comp-tile-item-d">
                <span className="req-title">Deadline:</span>
                No Deadline
              </div>
              <div className="d-flex justify-content-center align-items-center comp-tile-item"></div>
              <div className="comp-tile-item-e"></div>
              <div className="comp-tile-item-f">
                <span className="req-title">CTC:</span>
                300000
              </div>
              <div className="comp-tile-item-g">
                <span className="req-title">Openings:</span>4
              </div>
              <div className="comp-tile-item-h">
                <span className="req-title">Program:</span>
                Full Stack Development
              </div>
              <div className="comp-tile-item-i"></div>
            </div>
            <div className="req-item">
              <div className="comp-tile-item-a">
                <div className="company-logo"></div>
                <div className="title-links">
                  <h3>GUVI</h3>
                  <div className="links">
                    <i className="fa-solid fa-link"></i>
                    <a href="https://www.guvi.in" target="_blank">
                      https://www.guvi.in
                    </a>
                  </div>
                </div>
              </div>
              <div className="comp-tile-item-b">
                <span className="req-title">Role:</span>
                Software Engineer
              </div>
              <div className="comp-tile-item-c">
                <span className="req-title">Nature of Job:</span>
                Full-time
              </div>
              <div className="comp-tile-item-d">
                <span className="req-title">Deadline:</span>
                2023-08-11, 23:20
              </div>
              <div className="d-flex justify-content-center align-items-center comp-tile-item"></div>
              <div className="comp-tile-item-e"></div>
              <div className="comp-tile-item-f">
                <span className="req-title">CTC:</span>
                500000
              </div>
              <div className="comp-tile-item-g">
                <span className="req-title">Openings:</span>5
              </div>
              <div className="comp-tile-item-h">
                <span className="req-title">Program:</span>
                Full Stack Development
              </div>
              <div className="comp-tile-item-i"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requirement;

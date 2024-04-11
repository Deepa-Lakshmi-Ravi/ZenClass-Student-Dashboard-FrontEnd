import { FaExternalLinkAlt } from "react-icons/fa";
import "./taskUrl.css";

const TaskUrl = ({ item }) => {
  return (
    <>
      <div>
        {item.frontEndCode && (
          <h6>
            <a href={item.frontEndCode} target="_blank" className="task_url">
              Front End Code <FaExternalLinkAlt />
            </a>
          </h6>
        )}
        {item.frontEndURL && (
          <h6>
            <a href={item.frontEndURL} target="_blank" className="task_url">
              Front End Deployed URL <FaExternalLinkAlt />
            </a>
          </h6>
        )}
        {item.backEndCode && (
          <h6>
            <a href={item.backEndCode} target="_blank" className="task_url">
              Back End Code <FaExternalLinkAlt />
            </a>
          </h6>
        )}
        {item.backEndURL && (
          <h6>
            <a href={item.backEndURL} target="_blank" className="task_url">
              Back End Deployed URL <FaExternalLinkAlt />
            </a>
          </h6>
        )}
        <div className="task_score">Task Score:-{item.score}</div>
      </div>
    </>
  );
};

export default TaskUrl;

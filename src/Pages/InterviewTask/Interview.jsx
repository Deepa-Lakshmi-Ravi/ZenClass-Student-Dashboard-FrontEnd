import { useContext, useEffect } from "react";
import DataContext from "../../Context/dataContext";
const Interview = () => {
  const { handleHead } = useContext(DataContext);

  useEffect(() => {
    handleHead("Task Submissions");
  }, []);
  return (
    <>
      <div className="interview" style={{ marginLeft: "100px" }}>
        <div style={{ color: "#3b4286", fontSize: "18px" }}>
          Content available after completing Placement preparation
        </div>
      </div>
    </>
  );
};
export default Interview;

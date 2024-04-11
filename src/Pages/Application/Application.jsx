import { useContext, useEffect } from "react";
import DataContext from "../../Context/dataContext";
const Application = () => {
  const { handleHead } = useContext(DataContext);

  useEffect(() => {
    handleHead("My Applications");
  }, []);
  return (
    <>
      <div className="content" style={{ marginLeft: "100px" }}>
        <div style={{ color: "#555a8f", fontSize: "18px" }}>
          Content available after completing Placement preparation
        </div>
      </div>
    </>
  );
};
export default Application;

import { useContext, useEffect } from "react";
import DataContext from "../../Context/dataContext";
import "./Certificate.css";

const Certificate = () => {
  const { handleHead } = useContext(DataContext);

  useEffect(() => {
    handleHead("Certificates");
  }, []);
  return (
    <>
      <div className="certificate">
        <div className="certificate-header"></div>
        <div className="certificate-content">
          Your Certificate is not yet Generated.
        </div>
      </div>
    </>
  );
};

export default Certificate;

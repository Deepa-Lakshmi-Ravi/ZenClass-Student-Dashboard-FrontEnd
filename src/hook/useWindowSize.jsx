import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowsize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.addEventListener("resize", handleResize);
  }, []);
  return windowsize;
};

export default useWindowSize;

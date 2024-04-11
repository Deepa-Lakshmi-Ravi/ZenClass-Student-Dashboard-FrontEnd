import { createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AxiosService from "../Axios/AxiosService";
import { roadMapData } from "../../utils/RoadmapData";
import useWindowSize from "../hook/useWindowSize";
import "react-toastify/dist/ReactToastify.css";

const DataContext = createContext({});

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  // variables and functions
  const { width } = useWindowSize();
  const [head, setHead] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [token, setToken] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    headers: {
      authorization: `bearer ${token}`,
    },
  });

  //for pages
  const [day, setDay] = useState(0);
  const [data, setData] = useState(roadMapData[0]);
  const [flag, setFlag] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [frontEndCode, setFrontEndCode] = useState("");
  const [frontEndURL, setFrontEndURL] = useState("");
  const [backEndCode, setBackEndCode] = useState("");
  const [backEndURL, setBackEndURL] = useState("");
  const [DBTask, setDBTask] = useState([]);
  const [trigger, setTrigger] = useState(0);
  const [capStone, setCapStone] = useState(null);
  const [query, setQuery] = useState([]);
  const [portfolio, setPortfolio] = useState(null);
  const [leave, setLeave] = useState([]);
  const [mock, setMock] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  //handle sign in
  useEffect(() => {
    const loggedInUserJson = localStorage.getItem("loggedInUser");
    if (loggedInUserJson) {
      const user = JSON.parse(loggedInUserJson);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedUser(user.studentData);
      setToken(user.token);
      setConfig({
        headers: {
          authorization: `bearer ${user.token}`,
        },
      });
    }
    AxiosService.get("/")
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);

  //ShowPassword function
  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (data) => {
    setLoading(true);
    try {
      let response = await AxiosService.post("/student/login", data);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(response.data.studentData)
      );
      setLoggedUser(response.data.studentData);
      setToken(response.data.token);
      setConfig({
        headers: {
          authorization: `bearer ${response.data.token}`,
        },
      });

      setLoading(false);

      if (response.data.studentData.isMentor) {
        navigate("/mentor");
      } else {
        navigate("/class");
      }
      if (response.status === 201) {
        toast.success("login successful", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect email or password", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  //handle sign up
  const handleSignup = async (data) => {
    setLoading(true);
    try {
      let res = await AxiosService.post("/student/signup", data);
      if (res.status === 201) {
        toast.success("Account created successfully", {
          position: "top-center",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create account.Please try again", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  //handle log out
  const handleLogout = () => {
    setToken(null);
    setLoggedUser(null);
    setHead("Class");
    navigate("/");
    localStorage.clear();
  };

  //handle forgot

  const handleforgotPassword = async (data) => {
    setLoading(true);
    try {
      let response = await AxiosService.post("/student/forgot-password", data);
      if (response.status === 201) {
        toast.success(
          "Reset link sent successfully your email.please check your email",
          {
            position: "top-center",
          }
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  //handle reset
  const { randomString, expirationTimestamp } = useParams();

  const handleresetPassword = async (data) => {
    setLoading(true);
    try {
      let response = await AxiosService.post(
        `/student/reset-password/${randomString}/${expirationTimestamp}`,
        data
      );
      if (response.status === 200) {
        toast.success("Password updated successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Invalid token or token has expired.Please request a new reset link.",
        {
          position: "top-center",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  //handle profile updation
  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await AxiosService.put("/student/update", data);
      const student = response.data.matchedstudent;
      const updatedData = { token, student };
      localStorage.setItem("loggedInUser", JSON.stringify(updatedData));
      setLoggedUser(updatedData.studentData);
      toast.success("Profile updated successfully");
      setLoading(false);
      setTimeout(() => {
        navigate("/class");
      }, 2000);
    } catch (err) {
      toast.error("Something went wrong , Please try again later");
    } finally {
      setLoading(false);
    }
  };

  // handle task submission

  const handleTask = async (event) => {
    event.preventDefault();

    setLoading(true);

    const config = {
      headers: {
        authorization: `bearer ${token}`,
      },
    };
    let check = loggedUser.email
      ? loggedUser.email
      : loggedUser.studentData.email;
    check = check + day;
    const newTask = {
      day,
      frontEndCode,
      frontEndURL,
      backEndCode,
      backEndURL,
      task: data.task,
      title: data.title,
      check,
    };

    try {
      const response = await AxiosService.post(
        "/student/task",
        newTask,
        config
      );
      toast.success(response.data.message);
      setBackEndCode("");
      setBackEndURL("");
      setFrontEndCode("");
      setFrontEndURL("");
      setLoading(false);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setLoading(false);
    }
  };

  // fetching task
  const fetchTask = async () => {
    try {
      const fetchedTask = await AxiosService.get("student/task", config);
      if (fetchedTask) {
        setDBTask(fetchedTask.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching all task
  const fetchAllTask = async () => {
    try {
      const fetchedTask = await AxiosService.get("student/alltask");
      if (fetchedTask) {
        setDBTask(
          fetchedTask.data.filter((item) => item.score === "Yet to be graded")
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // update task Score
  const handleTaskScore = async (data) => {
    setLoading(true);

    try {
      const response = await AxiosService.patch(
        "/student/task/evaluation",
        data
      );
      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setLoading(false);
    }
  };

  // handling capstone submission
  const handleCapStone = async (data) => {
    setLoading(true);

    try {
      const response = await AxiosService.post(
        "student/capstone",
        data,
        config
      );
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setLoading(false);
    }
  };

  // fetching capstone
  const fetchCapStone = async () => {
    try {
      const fetchedCapStone = await AxiosService.get(
        "student/capstone",
        config
      );
      if (fetchedCapStone) {
        setCapStone(fetchedCapStone.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handling query request
  const handleAddQuery = async (data) => {
    setLoading(true);

    try {
      const response = await AxiosService.post("student/query", data, config);
      setTrigger((prev) => prev + 1);
      setLoading(false);
      toast.success(response.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setLoading(false);
    }
  };

  // handling query request
  const handleQueryCancel = async (data) => {
    try {
      const response = await AxiosService.delete(
        `student/query/${data}`,
        config
      );
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  // fetching queries
  const fetchQuery = async () => {
    try {
      const fetchedQuery = await AxiosService.get("/student/query", config);
      if (fetchedQuery) {
        setQuery(fetchedQuery.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // handling portfolio submission
  const handlePortfolio = async (data) => {
    setLoading(true);

    try {
      const response = await AxiosService.post(
        "student/portfolio",
        data,
        config
      );
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setLoading(false);
    }
  };

  // fetching portfolio data
  const fetchPortfolio = async () => {
    try {
      const fetchedPortfolio = await AxiosService.get(
        "student/portfolio",
        config
      );
      if (fetchedPortfolio) {
        setPortfolio(fetchedPortfolio.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handling leave submission
  const handleAddLeave = async (data) => {
    setLoading(true);

    try {
      const response = await AxiosService.post("student/leave", data, config);
      setLoading(false);
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setLoading(false);
    }
  };

  // handling leave canceling
  const handleLeaveCancel = async (data) => {
    try {
      const response = await AxiosService.delete(
        `student/leave/${data}`,
        config
      );
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  // fetching leave data
  const fetchLeave = async () => {
    try {
      const fetchedLeave = await AxiosService.get("student/leave", config);
      if (fetchedLeave) {
        setLeave(fetchedLeave.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetching mock data
  const fetchMock = async () => {
    try {
      const fetchedMock = await AxiosService.get("student/mock", config);
      if (fetchedMock) {
        setMock(fetchedMock.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //handle add testimonial
  const handleAddTestimonial = async (data) => {
    setLoading(true);
    try {
      let response = await AxiosService.post(
        "student/testimonial",
        data,
        config
      );
      setLoading(false);
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  //handle delete testimonial
  const handleCancelTestimonial = async (data) => {
    setLoading(true);
    try {
      let response = await AxiosService.post(
        `student/testimonial/${data}`,
        config
      );
      setLoading(false);
      toast.success(response.data.message);
      setTrigger((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  //fetch testmonial
  const fetchTestimonial = async () => {
    try {
      let fetchedTestimonial = await AxiosService.get(
        "student/testimonial",
        config
      );
      if (fetchedTestimonial) {
        setTestimonial(fetchedTestimonial.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleHead = (data) => {
    setHead(data);
    setToggle(false);
    localStorage.setItem("head", data);
  };

  return (
    <DataContext.Provider
      value={{
        head,
        setHead,
        loggedUser,
        setLoggedUser,
        token,
        setToken,
        showPassword,
        setShowPassword,
        resetToken,
        setResetToken,
        handleSignIn,
        handleLogout,
        handleSignup,
        handleProfileUpdate,
        handleforgotPassword,
        handleresetPassword,
        loading,
        setLoading,
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
        fetchTask,
        DBTask,
        setDBTask,
        trigger,
        setTrigger,
        capStone,
        handleCapStone,
        fetchCapStone,
        query,
        fetchQuery,
        handleAddQuery,
        handleQueryCancel,
        portfolio,
        fetchPortfolio,
        handlePortfolio,
        leave,
        fetchLeave,
        handleAddLeave,
        handleLeaveCancel,
        mock,
        testimonial,
        setTestimonial,
        fetchMock,
        handleHead,
        toggle,
        setToggle,
        fetchAllTask,
        handleTaskScore,
        fetchTestimonial,
        handleAddTestimonial,
        handleCancelTestimonial,
        PasswordVisible,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

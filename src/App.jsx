import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import DataContext from "./Context/dataContext";
import Header from "./Components/Header/Head";
import NavBar from "./Components/SideNavBar/NavBar";
import RoadMap from "./Pages/RoadMap/Roadmap";
import Task from "./Pages/Tasks/Task";
import Webcode from "./Pages/Webcode/Webcode";
import Capstone from "./Pages/Capstone/Capstone";
import Query from "./Pages/Queries/Query";
import Requirement from "./Pages/Requirements/Requirement";
import PortfolioSubmission from "./Pages/Portfolio/Portfolio";
import Application from "./Pages/Application/Application";
import InterviewTask from "./Pages/InterviewTask/Interview";
import Leave from "./Pages/Leave/Leave";
import Mock from "./Pages/Mock/Mock";
import Certificate from "./Pages/Certificate/Certificate";
import Testimonial from "./Pages/Testimonial/Testimonial";
import LeaderBoard from "./Pages/LeaderBoard/LeaderBoard";
import Syllabus from "./Pages/Syllabus/Syllabus";
import PlacementBoard from "./Pages/Placement/Placement";
import SignUpForm from "./Pages/Signup/Signup";
import SignInForm from "./Pages/SignIn/Login";
import ForgotPasswordForm from "./Pages/Forgot/forgotPassword";
import ResetPasswordForm from "./Pages/Reset/ResetPassword";
import LoggedOut from "./Pages/LoggedOut/LoggedOut";
import Profile from "./Pages/Profile/Profile";
import Mentor from "./Pages/Mentor/Mentor";
import "./App.css";

function App() {
  const { loggedUser } = useContext(DataContext);

  return (
    <>
      {loggedUser && !loggedUser.isMentor && (
        <>
          <Header />
          <NavBar />
        </>
      )}
      <Routes>
        {!loggedUser && (
          <>
            <Route path="/" element={<SignInForm />} />
            <Route path="/forgot" element={<ForgotPasswordForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route
              path="/reset-password/:id"
              element={<ResetPasswordForm />}
            />
            <Route path="/*" element={<LoggedOut />} />
          </>
        )}
        {loggedUser && !loggedUser.isMentor && (
          <>
            <Route path="/" element={<RoadMap />} />
            <Route path="/class" element={<RoadMap />} />
            <Route path="/task" element={<Task />} />
            <Route path="/webcode" element={<Webcode />} />
            <Route path="/capstone" element={<Capstone />} />
            <Route path="/query" element={<Query />} />
            <Route path="/requirement" element={<Requirement />} />
            <Route path="/portfolio" element={<PortfolioSubmission />} />
            <Route path="/application" element={<Application />} />
            <Route path="/interviewtasks" element={<InterviewTask />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/mock-interview" element={<Mock />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/learderboard" element={<LeaderBoard />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/placementboard" element={<PlacementBoard />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
        {loggedUser && loggedUser.isMentor && (
          <>
            <Route path="/mentor" element={<Mentor />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;

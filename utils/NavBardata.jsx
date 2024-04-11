import {
  FaListAlt,
  FaAward,
  FaFileContract,
  FaFileSignature,
  FaFileMedical,
  FaFileInvoice,
} from "react-icons/fa";
import {
  BsCardChecklist,
  BsFillFileEarmarkCodeFill,
  BsJournalCode,
  BsFileEarmarkPersonFill,
} from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiRank3 } from "react-icons/gi";

export const navBarLink = [
  {
    id: 1,
    name: "Class",
    icon: <BsFileEarmarkPersonFill />,
    link: "/class",
  },
  {
    id: 2,
    name: "Tasks",
    icon: <BsCardChecklist />,
    link: "/task",
  },
  {
    id: 3,
    name: "Webcode",
    icon: <BsFillFileEarmarkCodeFill />,
    link: "/webcode",
  },
  {
    id: 4,
    name: "Capstone",
    icon: <MdOutlineDeveloperMode />,
    link: "/capstone",
  },
  {
    id: 5,
    name: "Queries",
    icon: <FaListAlt />,
    link: "/query",
  },
  {
    id: 6,
    name: "Requirements",
    icon: <FaFileContract />,
    link: "/requirement",
  },
  {
    id: 7,
    name: "Portfolio-submission",
    icon: <BsFileEarmarkPersonFill />,
    link: "/portfolio",
  },
  {
    id: 8,
    name: "Application",
    icon: <FaFileSignature />,
    link: "/application",
  },
  {
    id: 9,
    name: "Interviewtasks",
    icon: <BsCardChecklist />,
    link: "/interviewtasks",
  },
  {
    id: 10,
    name: "Leave-applications",
    icon: <FaFileMedical />,
    link: "/leave",
  },
  {
    id: 11,
    name: "Mock-interview",
    icon: <FaFileInvoice />,
    link: "/mock-interview",
  },
  {
    id: 12,
    name: "Certificate",
    icon: <FaAward />,
    link: "/certificate",
  },
  {
    id: 13,
    name: "Testimonial",
    icon: <BsJournalCode />,
    link: "/testimonial",
  },
  {
    id: 14,
    name: "Leaderboard",
    icon: <GiRank3 />,
    link: "/learderboard",
  },
  {
    id: 15,
    name: "Syllabus",
    icon: <BsJournalCode />,
    link: "/syllabus",
  },
  {
    id: 16,
    name: "Placement Board",
    icon: <BsJournalCode />,
    link: "/placementboard",
  },
];

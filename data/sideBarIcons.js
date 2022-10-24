import AboutIcon from "../components/icons/AboutIcon";
import ContactIcon from "../components/icons/ContactIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ProjectsIcon from "../components/icons/ProjectsIcon";
import ResumeIcon from "../components/icons/ResumeIcon";
import ServiceIcon from "../components/icons/ServiceIcon";
import WorkIcon from "../components/icons/WorkIcon";

export const sideBarIcons = [
  {
    id: 1,
    icon: <HomeIcon />,
    link: "#home",
    title: "home",
  },
  {
    id: 2,
    icon: <AboutIcon />,
    link: "#about",
    title: "about",
  },
  {
    id: 3,
    icon: <ServiceIcon />,
    link: "#service",
    title: "services",
  },
  {
    id: 4,
    icon: <WorkIcon />,
    link: "#experience",
    title: "work experience",
  },
  {
    id: 5,
    icon: <ProjectsIcon />,
    link: "#project",
    title: "projects",
  },
  {
    id: 6,
    icon: <ContactIcon />,
    link: "#contact",
    title: "contact me",
  },
];

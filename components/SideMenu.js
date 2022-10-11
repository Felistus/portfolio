import styles from "../styles/Home.module.css";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import ServiceIcon from "./icons/ServiceIcon";
import WorkIcon from "./icons/WorkIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import ContactIcon from "./icons/ContactIcon";
import ResumeIcon from "./icons/ResumeIcon";

export default function SideMenu() {
  return (
    <div className="flex flex-col justify-between items-center py-12 w-24 h-screen border-r-2 border-[#444343] ">
      <div className={styles.logo}>JT</div>

      <div className="flex flex-col my-8 flex-1 space-y-10 justify-center">
        <div className="hover:text-[#D3AE4E] cursor-pointer ">
          <HomeIcon />
        </div>
        <div className="hover:text-[#D3AE4E] cursor-pointer ">
          <AboutIcon />
        </div>
        <div className="hover:text-[#D3AE4E] cursor-pointer ">
          <ServiceIcon />
        </div>
        <div className="hover:text-[#D3AE4E] cursor-pointer ">
          <WorkIcon />
        </div>
        <div className="hover:text-[#D3AE4E] cursor-pointer ">
          <ProjectsIcon />
        </div>
        <div className="hover:text-[#D3AE4E] cursor-pointer ">
          <ContactIcon />
        </div>
      </div>

      <div className="hover:text-[#D3AE4E] cursor-pointer ">
        <ResumeIcon />
      </div>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import ServiceIcon from "./icons/ServiceIcon";
import WorkIcon from "./icons/WorkIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import ContactIcon from "./icons/ContactIcon";
import ResumeIcon from "./icons/ResumeIcon";
import Link from "next/link";
import { sideBarIcons } from "../data/sideBarIcons";

export default function SideMenu() {
  return (
    <div className="flex flex-col justify-between items-center py-12 w-24 h-screen border-r-2 border-[#444343] ">
      <div className={styles.logo}>
        <Link href="#home">JT</Link>
      </div>

      <div className="flex flex-col my-8 flex-1 space-y-10 justify-center">
        {sideBarIcons.map((icon) => (
          <div key={icon.id} className="hover:text-[#D3AE4E] cursor-pointer  ">
            <a href={icon.link}>{icon.icon}</a>
          </div>
        ))}
      </div>

      <div className="hover:text-[#D3AE4E] cursor-pointer ">
        <ResumeIcon />
      </div>
    </div>
  );
}

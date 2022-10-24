import styles from "../styles/Home.module.css";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import ServiceIcon from "./icons/ServiceIcon";
import WorkIcon from "./icons/WorkIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import ContactIcon from "./icons/ContactIcon";
import ResumeIcon from "./icons/ResumeIcon";
import MenuUnfoldIcon from "../components/icons/MenuUnfoldIcon";

import Link from "next/link";
import { sideBarIcons } from "../data/sideBarIcons";

export default function MobileDrawer({ show, setShow }) {
  function hideSideBar() {
    setShow((prev) => !prev);
  }
  return (
    <div className={`${show ? " fly-show " : " fly "}`}>
      <div
        onClick={hideSideBar}
        className="z-10 bg-[#181A1B] text-white absolute top-3 hover:border-[#D3AE4E] border-[1px] border-gray-400 p-1 rounded-xl cursor-pointer left-10 hover:text-[#D3AE4E]"
      >
        <MenuUnfoldIcon />
      </div>
      <div className="flex flex-col justify-between items-center py-12 w-24 h-screen border-r-2 border-[#444343] ">
        <div className={styles.logo}>
          <Link href="#home">JT</Link>
        </div>

        <div className="flex flex-col my-8 flex-1 space-y-10 justify-center">
          {sideBarIcons.map((icon) => (
            <div
              onClick={() => setShow((prev) => !prev)}
              key={icon.id}
              className="hover:text-[#D3AE4E] text-white cursor-pointer  "
              title={icon.title}
            >
              <a href={icon.link}>{icon.icon}</a>
            </div>
          ))}
        </div>
        <div
          className="text-red-500 cursor-pointer animate-pulse "
          title="download my Resume "
        >
          <a href="/Ezeugo_Obieze.pdf" download="Ezeugo Felistus Obieze">
            <ResumeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

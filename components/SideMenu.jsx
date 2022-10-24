import styles from "../styles/Home.module.css";
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
          <div
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
  );
}

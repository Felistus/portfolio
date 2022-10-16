import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function RecentProject() {
  const [active, setActive] = useState(1);
  const [work, setWork] = useState([...projects]);

  function filterProject(e) {
    if (e.target.textContent === "All") setActive(1);
    else if (e.target.textContent === "React.js") setActive(2);
    else if (e.target.textContent === "Next.js") setActive(3);
    else if (e.target.textContent === "Vue.js") setActive(4);
  }

  useEffect(() => {
    switch (active) {
      case 1:
        setWork([...projects]);
        break;
      case 2:
        setWork(projects.filter((item) => item.library === "react"));
        break;
      case 3:
        setWork(projects.filter((item) => item.framework === "next"));
        break;
      case 4:
        setWork(projects.filter((item) => item.library === "vue"));
        break;

      default:
        break;
    }
  }, [active]);

  return (
    <div className="my-20 w-full 2xl:max-w-7xl 2xl:mx-auto ">
      <div>
        <p className="header-font text-gray-300">Projects</p>
      </div>
      <div>
        <div className="flex space-x-10 font-medium text-xl projects  ">
          <p
            onClick={(e) => filterProject(e)}
            className={
              `${active === 1 ? " text-[#D3AE4E] " : " text-white "}` +
              " cursor-pointer hover:text-[#D3AE4E] "
            }
          >
            All
          </p>
          <p
            onClick={(e) => filterProject(e)}
            className={
              `${active === 2 ? " text-[#D3AE4E] " : " text-white "}` +
              " cursor-pointer hover:text-[#D3AE4E] "
            }
          >
            React.js
          </p>
          <p
            onClick={(e) => filterProject(e)}
            className={
              `${active === 3 ? " text-[#D3AE4E] " : " text-white "}` +
              " cursor-pointer hover:text-[#D3AE4E] "
            }
          >
            Next.js
          </p>
          <p
            onClick={(e) => filterProject(e)}
            className={
              `${active === 4 ? " text-[#D3AE4E] " : " text-white "}` +
              " cursor-pointer hover:text-[#D3AE4E] "
            }
          >
            Vue.js
          </p>
        </div>

        <div className="mt-12 md:grid md:grid-cols-3 md:gap-20">
          {work.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

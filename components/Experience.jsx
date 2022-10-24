import React, { Suspense, useEffect, useState } from "react";
import { changeView } from "../functionUtils";
const Inmotion = React.lazy(() => import("../components/Inmotion"));
const Akumzy = React.lazy(() => import("../components/Akumzy"));
const Jaratechnology = React.lazy(() => import("../components/Jaratechnology"));
const VisionVoice = React.lazy(() => import("../components/VisionVoice"));

export default function Experience() {
  const [active, setActive] = useState(1);
  const [value, setValue] = useState();

  useEffect(() => {
    switch (active) {
      case 1:
        setValue(<Inmotion />);
        break;
      case 2:
        setValue(<VisionVoice />);
        break;
      case 3:
        setValue(<Jaratechnology />);
        break;
      case 4:
        setValue(<Akumzy />);
        break;

      default:
        break;
    }
  }, [active]);
  return (
    <div className="w-full xl:max-w-7xl xl:mx-auto ">
      <div>
        <p className="header-font text-gray-300 ">Experience</p>
      </div>
      <div className="lg:flex experience text-white">
        <div className="mb-5 xl:mb-0 ">
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${
                active === 1
                  ? " bg-none text-red-700 font-semibold  xl:text-white xl:bg-[#383838] "
                  : "  "
              }` +
              "pr-24 text-xl font-medium py-2 xl:py-4 rounded-l-2xl xl:pl-5 cursor-pointer trans"
            }
          >
            inmotion ICT HUB
          </div>
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${
                active === 2
                  ? " bg-none text-red-700 font-semibold  xl:text-white xl:bg-[#383838] "
                  : "  "
              }` +
              "pr-24 text-xl font-medium py-2 xl:py-4 rounded-l-2xl xl:pl-5 cursor-pointer trans"
            }
          >
            Vision Voice INC.
          </div>
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${
                active === 3
                  ? " bg-none text-red-700 font-semibold  xl:text-white xl:bg-[#383838] "
                  : ""
              }` +
              "pr-24 text-xl font-medium py-2 xl:py-4 rounded-l-2xl xl:pl-5 cursor-pointer trans"
            }
          >
            Jarotechnologies
          </div>
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${
                active === 4
                  ? " bg-none text-red-700 font-semibold  xl:text-white xl:bg-[#383838] "
                  : ""
              }` +
              "pr-24 text-xl font-medium py-2 xl:py-4 rounded-l-2xl xl:pl-5 cursor-pointer trans"
            }
          >
            Akumzy Lab
          </div>
        </div>
        <div className="flex-1 h-fit rounded-r-2xl">
          <Suspense fallback={<Inmotion />}>{value}</Suspense>
        </div>
      </div>
    </div>
  );
}

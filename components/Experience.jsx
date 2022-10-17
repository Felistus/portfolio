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
    <div className="w-full 2xl:max-w-7xl 2xl:mx-auto ">
      <div>
        <p className="header-font text-gray-300 ">Experience</p>
      </div>
      <div className="flex experience ">
        <div className="">
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${active === 1 ? " bg-[#383838] " : "  "}` +
              "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
            }
          >
            inmotion ICT HUB
          </div>
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${active === 2 ? " bg-[#383838] " : "  "}` +
              "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
            }
          >
            Vision Voice INC.
          </div>
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${active === 3 ? " bg-[#383838] " : ""}` +
              "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
            }
          >
            Jarotechnologies
          </div>
          <div
            onClick={(e) => changeView(e, setActive)}
            className={
              `${active === 4 ? " bg-[#383838] " : ""}` +
              "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
            }
          >
            Akumzy Lab
          </div>
        </div>
        <div className="flex-1  h-auto rounded-r-2xl">
          <Suspense fallback={<Inmotion />}>{value}</Suspense>
        </div>
      </div>
    </div>
  );
}

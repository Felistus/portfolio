/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
const SideMenu = React.lazy(() => import("../components/SideMenu"));
const About = React.lazy(() => import("../components/About"));
const Inmotion = React.lazy(() => import("../components/Inmotion"));
const Intro = React.lazy(() => import("../components/Intro"));
const Service = React.lazy(() => import("../components/Service"));
const Akumzy = React.lazy(() => import("../components/Akumzy"));
const Jaratechnology = React.lazy(() => import("../components/Jaratechnology"));
const VisionVoice = React.lazy(() => import("../components/VisionVoice"));
const RecentProject = React.lazy(() => import("../components/RecentProject"));

export default function Home() {
  const [active, setActive] = useState(1);
  const [value, setValue] = useState();

  function change(e) {
    if (e.target.textContent === "inmotion ICT HUB") setActive(1);
    else if (e.target.textContent === "Vision Voice INC.") setActive(2);
    else if (e.target.textContent === "Jarotechnologies") setActive(3);
    else if (e.target.textContent === "Akumzy Lab") setActive(4);
  }

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
    <div>
      <Head>
        <title>Ezeugo Felistus Obieze</title>
        <meta name="description" content="created by Ezeugo Felistus Obieze" />
        <meta property="og:URL" content="https://ezeugoobieze.vercel.app/" />
        <meta
          property="og:title"
          content="ezeugoobieze.com® | My Personal Portfolio"
        />
        <meta
          property="og:description"
          content="my portfolio, reactjs projects, nextjs projects, reactjs, nextjs, javascript, typescript, soft skills, technical skills"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#181A1B]">
        <section className="flex">
          <Suspense
            fallback={
              <div className="flex items-center justify-center animate-pulse h-screen w-screen ">
                Jarotechnologies
              </div>
            }
          >
            <div>
              <SideMenu />
            </div>
            <div className="h-screen flex-1 w-screen px-12 overflow-auto ">
              <Intro />
              <About />
              <Service />
              <div className="my-20 w-full 2xl:max-w-7xl 2xl:mx-auto ">
                <div>
                  <p className="header-font text-gray-300 ">Experience</p>
                </div>
                <div className="flex experience ">
                  <div className="">
                    <div
                      onClick={(e) => change(e)}
                      className={
                        `${active === 1 ? " bg-[#383838] " : "  "}` +
                        "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
                      }
                    >
                      inmotion ICT HUB
                    </div>
                    <div
                      onClick={(e) => change(e)}
                      className={
                        `${active === 2 ? " bg-[#383838] " : "  "}` +
                        "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
                      }
                    >
                      Vision Voice INC.
                    </div>
                    <div
                      onClick={(e) => change(e)}
                      className={
                        `${active === 3 ? " bg-[#383838] " : ""}` +
                        "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
                      }
                    >
                      Jarotechnologies
                    </div>
                    <div
                      onClick={(e) => change(e)}
                      className={
                        `${active === 4 ? " bg-[#383838] " : ""}` +
                        "pr-24 text-xl font-medium py-4 rounded-l-2xl pl-5 cursor-pointer trans"
                      }
                    >
                      Akumzy Lab
                    </div>
                  </div>
                  <div className="flex-1  h-auto rounded-r-2xl">{value}</div>
                </div>
              </div>
              <RecentProject />
            </div>
          </Suspense>
        </section>
      </main>
    </div>
  );
}

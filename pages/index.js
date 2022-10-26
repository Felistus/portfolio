/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { Suspense, useEffect, useRef, useState } from "react";
import MenufoldIcon from "../components/icons/MenufoldIcon";
import SideMenu from "../components/SideMenu";
import Intro from "../components/Intro";
import MobileDrawer from "../components/MobileDrawer";
const About = React.lazy(() => import("../components/About"));
const Contact = React.lazy(() => import("../components/Contact"));
const Experience = React.lazy(() => import("../components/Experience"));
const Service = React.lazy(() => import("../components/Service"));
const RecentProject = React.lazy(() => import("../components/RecentProject"));
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [show, setShow] = useState(false);

  function showSideBar() {
    setShow((prev) => !prev);
  }
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
          content="portfolio, reactjs, nextjs, javascript, soft skills, technical skills, portfolio project"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://my-og-img.vercel.app/api/og"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#181A1B]  ">
        <section className="flex  ">
          <div
            onClick={showSideBar}
            className="lg:hidden text-white z-10 bg-[#181A1B] absolute top-3 hover:border-[#D3AE4E] border-[1px] border-gray-400 p-1 rounded-xl cursor-pointer left-3 hover:text-[#D3AE4E]"
          >
            <MenufoldIcon />
          </div>
          <div className="hidden lg:block z-10">
            <SideMenu />
          </div>
          <div>
            <MobileDrawer show={show} setShow={setShow} />
          </div>
          <div className="h-screen flex-1 w-screen overflow-auto  ">
            <section id="home" className="px-6 md:px-12 w-full  ">
              <Intro />
            </section>
            <Suspense fallback={<Intro />}>
              <section id="about" className="px-6 md:px-12 w-full">
                <About />
              </section>
            </Suspense>
            <Suspense fallback={<About />}>
              <section
                className="px-6 md:px-12 w-full py-10 my-20 "
                id="service"
              >
                <Service />
              </section>
            </Suspense>
            <Suspense fallback={<Service />}>
              <section id="experience" className="px-6 md:px-12 w-full">
                <Experience />
              </section>
            </Suspense>
            <Suspense fallback={<Experience />}>
              <section id="project" className="px-6 my-20 md:px-12 py-10">
                <RecentProject />
              </section>
            </Suspense>
            <Suspense fallback={<RecentProject />}>
              <section id="contact" className="px-6 my-20 md:px-12 py-10">
                <Contact />
              </section>
            </Suspense>
          </div>
        </section>
      </main>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

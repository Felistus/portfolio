/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { Suspense, useState } from "react";
import SideMenu from "../components/SideMenu";
import Intro from "../components/Intro";
const About = React.lazy(() => import("../components/About"));
const Experience = React.lazy(() => import("../components/Experience"));
const Service = React.lazy(() => import("../components/Service"));
const RecentProject = React.lazy(() => import("../components/RecentProject"));

export default function Home() {
  const text = useState();
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

      <main className="bg-[#181A1B] ">
        <section className="flex">
          <div>{/* <SideMenu /> */}</div>
          <div className="h-screen flex-1 w-screen overflow-auto  ">
            <section id="home" className="px-6 md:px-12 ">
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
          </div>
        </section>
      </main>
    </div>
  );
}

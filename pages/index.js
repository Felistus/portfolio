/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { Suspense } from "react";
const SideMenu = React.lazy(() => import("../components/SideMenu"));
const About = React.lazy(() => import("../components/About"));
const Intro = React.lazy(() => import("../components/Intro"));
const Service = React.lazy(() => import("../components/Service"));

export default function Home() {
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
          <Suspense fallback={<div>loading</div>}>
            <div>
              <SideMenu />
            </div>
          </Suspense>
          <Suspense fallback={<div>loading</div>}>
            <div className="h-screen flex-1 w-screen px-12 overflow-auto">
              <Intro />
              <About />
              <Service />
            </div>
          </Suspense>
        </section>
      </main>
    </div>
  );
}

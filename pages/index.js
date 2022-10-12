import Head from "next/head";
import React, { Suspense } from "react";
import About from "../components/About";
import Intro from "../components/Intro";
const SideMenu = React.lazy(() => import("../components/SideMenu"));

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
          content="Search for portfolio, reactjs projects, nextjs projects, react, next, javascript, typescript, soft skills technical skills"
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
            </div>
          </Suspense>
        </section>
      </main>
    </div>
  );
}

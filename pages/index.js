import Head from "next/head";
import React, { Suspense } from "react";
import About from "../components/About";
import Intro from "../components/Intro";
const SideMenu = React.lazy(() => import("../components/SideMenu"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:URL" content="https://www.realtor.com" />
        <meta
          property="og:title"
          content="realtor.com® | Homes for Sale, Apartments &amp; Houses for Rent"
        />
        <meta
          property="og:description"
          content="Search homes for sale, new construction homes, apartments, and houses for rent. See property values. Shop mortgages."
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

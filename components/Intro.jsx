import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

/* eslint-disable @next/next/no-img-element */
export default function Intro() {
  return (
    <div
      className="flex flex-col flex-col-reverse justify-center md:block h-screen w-full xl:flex xl:flex-row xl:justify-between xl:items-center xl:max-w-7xl xl:mx-auto relative md:mb-20 xl:mb-0   "
      id="home"
    >
      <div className="w-[400px] hello-style md:h-auto md:relative md:top-[50px] xl:top-0">
        <p className="text-lg md:text-4xl font-bold mb-3  ">Hello there!</p>
        <p className="text-lg md:text-3xl font-semibold">
          I am <span>Ezeugo Felistus Obieze</span>
        </p>
        <p className="text-base font-light text-gray-500">
          a
          <span className="text-xl ml-1 text-gray-200">
            Front-End Developer
          </span>
        </p>
        <div className="flex space-x-3 my-3">
          <div className="cursor-pointer hover:text-[#D3AE4E]">
            <a
              href="https://www.linkedin.com/in/ezeugo-felistus-obieze/"
              target="_blanck"
              rel="noreferrer noopener"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="cursor-pointer hover:text-[#D3AE4E]">
            <a
              href="https://github.com/Felistus"
              target="_blanck"
              rel="noreferrer noopener"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-end xl:block mb-5 md:mb-0 ">
        <img src="/anim.svg" alt="my anim" />
      </div>
    </div>
  );
}

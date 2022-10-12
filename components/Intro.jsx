/* eslint-disable @next/next/no-img-element */
export default function Intro() {
  return (
    <div className="h-screen w-full flex items-center justify-between 2xl:max-w-7xl 2xl:mx-auto ">
      <div className="w-[400px] hello-style">
        <p className="text-lg md:text-4xl font-bold mb-3  ">Hello there!</p>
        <p className="text-lg md:text-3xl font-semibold">
          I am <span>Ezeugo Felistus Obieze</span>
        </p>
        <p className="text-base font-light italic text-gray-500">
          and I am a{" "}
          <span className="text-lg ml-1 text-gray-300">
            Front-End Developer
          </span>
        </p>
      </div>
      <div className="">
        <img src="/anim.svg" alt="my anim" />
      </div>
    </div>
  );
}

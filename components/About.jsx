/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="w-full xl:max-w-7xl xl:mx-auto   ">
      <div>
        <p className="header-font text-gray-300">About Me</p>
      </div>
      <div className="xl:flex xl:space-x-20 leading-6  ">
        <div className="w-60 h-60 rounded-full hover:border-2 mx-auto xl:mx-0 mb-5 ">
          <img src="/avatar.svg" alt="my avatar" />
        </div>
        <div className="bg-[#383838] text-white flex-1 rounded-xl p-5">
          <div className="text-base about-font">
            <p className="">
              My name is Ezeugo Felistus Obieze, and I am based in Port
              Harcourt, Nigeria. I studied at Federal University of Technology
              Owerri, Computer Science major.
            </p>
            <p className="my-4">
              The journey so far to becoming a seasoned Software Engineer has
              been a great one. Challenging and interesting at the same time. I
              am currently focused on Front-End Development with the goal of
              diving into Mobile Development someday. I am committed at what I
              do and I love learning new technologies.
            </p>
            <div className="md:flex items-center md:space-x-20 space-y-3 md:space-y-0 text-base">
              <dl>
                <dt className="font-medium">Soft Skills</dt>
                <dd>✔ Ability to collaborate </dd>
                <dd>✔ Good communication</dd>
                <dd>✔ Good time management</dd>
                <dd>✔ Detail-oriented problem-solving</dd>
                <dd>✔ Fast learner</dd>
              </dl>

              <dl>
                <dt className="font-medium">Technical Skills</dt>
                <dd>🛠 JavaScript</dd>
                <dd>🛠 TypeScript</dd>
                <dd>🛠 C Language (Basic)</dd>
                <dd>🛠 React.js & Next.js</dd>
                <dd>🛠 Git & GitHub</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

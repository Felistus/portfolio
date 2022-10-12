/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="w-full 2xl:max-w-7xl 2xl:mx-auto">
      <div>
        <p className="header-font text-gray-300">About Me</p>
      </div>
      <div className="flex space-x-20 leading-6">
        <div className="w-64 h-64 rounded-full hover:border-2 ">
          <img src="/avatar.svg" alt="my avatar" />
        </div>
        <div className="bg-[#383838] flex-1 rounded-xl p-5">
          <div className="text-lg about-font">
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
            <p>Some of my Skills include:</p>
            <div className="flex items-center space-x-20 text-base">
              <dl>
                <dt className="font-bold">Soft Skills</dt>
                <dd>✔ Ability to collaborate </dd>
                <dd>✔ Good communication</dd>
                <dd>✔ Good time management</dd>
                <dd>✔ Detail-oriented problem-solving</dd>
                <dd>✔ Fast learner</dd>
              </dl>

              <dl>
                <dt className="font-bold">Technical Skills</dt>
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

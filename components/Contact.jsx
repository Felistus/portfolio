import { useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Contact() {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full xl:max-w-7xl xl:mx-auto ">
      <div>
        <p className="header-font text-gray-300">Get in Touch</p>
      </div>
      <div>
        <div className="block lg:flex lg:space-x-10 space-y-10 lg:space-y-0 font-medium text-xl overflow-y-hidden overflow-x-auto  ">
          <div className="text-white font-light w-full max-w-[400px] ">
            <p className="text-2xl projects">
              Interested! Let's have a discussion.
            </p>
            <p className="text-base font-medium">
              Send me an E-mail using the form 👉
            </p>
            <div className="flex items-center">
              <p className="text-base font-normal mr-3 ">WhatsApp me:</p>
              <p className="cursor-pointer">
                <a
                  target="_blanck"
                  rel="noreferrer noopener"
                  aria-label="Chat on WhatsApp"
                  href="https://tinyurl.com/jarotechnologies"
                >
                  <WhatsAppIcon />
                </a>
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col lg:block  ">
            <form
              action=""
              method="post"
              className="space-y-3 w-full md:w-[400px] lg:w-full "
            >
              <div className="text-base text-gray-300 font-light block lg:flex space-y-3 lg:space-y-0 lg:space-x-3 w-full  ">
                <input
                  required={true}
                  type="text"
                  name="userName"
                  id="userName"
                  className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full  "
                  placeholder="Enter your name"
                />
                <input
                  required={true}
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full   "
                  placeholder="Enter your email address!"
                />
              </div>
              <div className="text-base text-gray-300 font-light w-full  ">
                <input
                  required={true}
                  type="text"
                  name="emailSubject"
                  id="emailSubject"
                  className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full "
                  placeholder="Enter e-mail subject..."
                />
              </div>
              <div className="text-base text-gray-300 font-light w-full">
                <textarea
                  required={true}
                  name="emailBody"
                  id="emailBody"
                  cols="30"
                  rows="5"
                  className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full "
                  placeholder="Write your message..."
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Send Message"
                  className="outline-none font-semibold py-2 px-5 bg-[#322AAD] cursor-pointer text-white rounded-2xl text-base hover:bg-[#D3AE4E]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

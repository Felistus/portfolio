import { useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { send } from "emailjs-com";
import { toast } from "react-toastify";
const processID = process.env.NEXT_PUBLIC_ID;

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    email_subject: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    if (
      toSend.from_name !== "" &&
      toSend.email_subject !== "" &&
      toSend.message !== "" &&
      toSend.reply_to !== ""
    ) {
      send("contact_ID", "template_ID", toSend, processID)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setToSend({
            ...toSend,
            from_name: "",
            email_subject: "",
            message: "",
            reply_to: "",
          });
          toast.success("Message sent!");
          setSending(false);
        })
        .catch((err) => {
          toast.error("Email failed to send, please try again!");
          setSending(false);
          console.error("FAILED...", err);
        });
    } else {
      toast.warning("All fields are required.");
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-full xl:max-w-7xl xl:mx-auto ">
        <div>
          <p className="header-font text-gray-300">Get in Touch</p>
        </div>
        <div>
          <div className="block lg:flex lg:space-x-10 space-y-10 lg:space-y-0 font-medium text-xl overflow-y-hidden overflow-x-auto  ">
            <div className="text-white font-light w-full max-w-[400px] ">
              <p className="text-2xl projects">
                Interested! Let{"'"}s have a discussion.
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
                onSubmit={onSubmit}
                action=""
                method="post"
                className="space-y-3 w-full md:w-[400px] lg:w-full "
              >
                <div className="text-base text-gray-300 font-light block lg:flex space-y-3 lg:space-y-0 lg:space-x-3 w-full  ">
                  <input
                    required={true}
                    type="text"
                    name="from_name"
                    id="userName"
                    className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full  "
                    placeholder="Enter your name"
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                  <input
                    required={true}
                    type="email"
                    name="reply_to"
                    id="userEmail"
                    className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full   "
                    placeholder="Enter your email address!"
                    value={toSend.from_email}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-base text-gray-300 font-light w-full  ">
                  <input
                    required={true}
                    type="text"
                    name="email_subject"
                    id="emailSubject"
                    className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full "
                    placeholder="Enter e-mail subject..."
                    value={toSend.email_subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-base text-gray-300 font-light w-full">
                  <textarea
                    required={true}
                    name="message"
                    id="emailBody"
                    cols="30"
                    rows="5"
                    className="outline-none rounded-2xl py-3 px-4 w-full md:w-[400px] lg:w-full "
                    placeholder="Write your message..."
                    value={toSend.message}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  {/* <input
                  type="submit"
                  value="Send Message"
                  className={
                    `${
                      sending
                        ? " animate-pulse cursor-not-allowed bg-gray-800 "
                        : " "
                    }` +
                    "outline-none font-semibold py-2 px-5 bg-[#322AAD] cursor-pointer text-white rounded-2xl text-base hover:bg-[#D3AE4E]"
                  }
                /> */}
                  <button
                    className={
                      `${
                        sending
                          ? " animate-pulse cursor-not-allowed bg-gray-600 text-gray-400 "
                          : " hover:bg-[#D3AE4E] cursor-pointer text-white bg-[#322AAD] "
                      }` +
                      "outline-none font-semibold py-2 px-5 rounded-2xl text-base "
                    }
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

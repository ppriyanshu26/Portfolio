import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaLinkedin, FaInstagram, FaGithub, FaTelegram, FaUserGraduate } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // from .env.local
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // from .env.local
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // from .env.local
      )
      .then(
        () => {
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully.", {
            duration: 3000,
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            duration: 3000,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="section-title">CONTACT</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="w-full max-w-md flex items-center justify-between mb-4 px-1">
        {[
          { icon: <FaGithub />, link: "https://www.github.com/ppriyanshu26" },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/ppriyanshu26",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/ppriyanshu26_/",
          },
          {
            icon: <FaTelegram />,
            link: "https://t.me/ppika26",
          },
          {
            icon: <FaUserGraduate />,
            link: "https://codolio.com/profile/ppriyanshu26",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#ccdbec] hover:text-[#f59e0b] transition-transform transform hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full max-w-md glass-card p-6 rounded-2xl">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">.</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#102a42] text-white border border-[#4f6d8b] focus:outline-none focus:border-[#14b8a6]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#102a42] text-white border border-[#4f6d8b] focus:outline-none focus:border-[#14b8a6]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#102a42] text-white border border-[#4f6d8b] focus:outline-none focus:border-[#14b8a6]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#102a42] text-white border border-[#4f6d8b] focus:outline-none focus:border-[#14b8a6]"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full btn-primary py-3 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

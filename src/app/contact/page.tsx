import { FC } from "react";
import { montserrat } from "@/library/fonts";
import { Mail_Logo, Send_Icon } from "@/components/svgs";
import {
  Facebook_Link,
  Discord_Link,
  Instagram_Link,
  Github_Link,
  Linkedin_Link,
} from "@/components/SocialIcons";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex justify-center items-center max-md:pb-14 min-h-screen">
      <div className="grid md:grid-flow-col md:auto-cols-fr md:m-auto px-8 pt-[4.5rem] md:pt-[61px] container">
        <div
          className={`${montserrat.className} max-md:pb-10 flex flex-col justify-center`}
        >
          <h1 className="font-bold text-[3.5rem]">
            Let&apos;s chat. <br />
            Tell me about your project.
          </h1>
          <p className="py-4 font-medium text-2xl">
            Let&apos;s create something together.
          </p>
          <div className="space-y-8 w-[17.5rem]">
            <ul
              className="flex justify-between items-center"
              role="list"
              aria-label="social-links"
            >
              <Facebook_Link />
              <Instagram_Link />
              <Github_Link />
              <Discord_Link />
              <Linkedin_Link />
            </ul>
          </div>
        </div>
        <div className="bg-black dark:bg-white shadow-sm px-4 py-6 rounded-md h-full text-white dark:text-black">
          <p className="text-sm">GET IN TOUCH</p>
          <h1 className="font-black text-[3rem]">Contact Me</h1>
          <p className="pb-2 font-bold">Your Name</p>
          <form
            target="_self"
            action="https://formsubmit.co/5385df37b9c3edd6ea761a3900d0f923"
            method="POST"
            className=""
          >
            <input
              type="text"
              name="name"
              className="border focus-within:border-accent-400 rounded-md contact-input"
              placeholder="What is your name?"
              autoComplete="name"
              required
            />
            <p className="pb-2 font-bold">Your Email</p>
            <input
              type="email"
              name="email"
              className="border focus-within:border-accent-400 rounded-md contact-input"
              placeholder="What is your email?"
              autoComplete="email"
              required
            />
            <p className="pb-2 font-bold">Your Message</p>
            <textarea
              name="message"
              id=""
              rows={5}
              className="border focus-within:border-accent-400 rounded-md resize-none contact-input"
              placeholder="What is your message?"
              required
            ></textarea>
            <button
              type="submit"
              className={`bg-accent-400 hover:bg-accent-300 text-white text-sm pl-6 pr-5 py-2 rounded-full font-bold flex items-center justify-center tracking-wider ${montserrat.className}`}
            >
              SUBMIT
              <Send_Icon className="ml-2 w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;

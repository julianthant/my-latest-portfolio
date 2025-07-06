import Image from "next/image";
import HeadingImage from "@/assets/main-img.webp";
import Typewriter from "@/components/Typewriter";
import { dm_sans } from "@/library/fonts";
import {
  Facebook_Link,
  Instagram_Link,
  Linkedin_Link,
} from "@/components/SocialIcons";

const page = () => {
  return (
    <section className="flex justify-center items-center px-8 pt-[61px] min-h-svh container">
      <div className="flex gap-x-24">
        <div className="max-newXL:hidden">
          <ul
            className="flex flex-col justify-center gap-8 h-full"
            role="list"
            aria-label="social-links"
          >
            <Facebook_Link />
            <Instagram_Link />
            <Linkedin_Link />
          </ul>
        </div>
        <div className="place-items-center max-md:gap-y-8 md:gap-x-16 grid md:grid-flow-col md:m-auto">
          <div>
            <div className="max-w-[24.6rem] font-bold">
              <h1 className="text-[2.75rem]">
                Hi, I&apos;m <span className="text-accent-400">Julian</span>{" "}
                <br />
              </h1>
              <Typewriter />
            </div>
            <p
              className={`pt-3 pb-6 ${dm_sans.className} text-slate-500 dark:text-slate-400`}
            >
              Hello, I'm Julian, a Full-Stack Web Developer specializing in
              building dynamic applications with React and Node.js. My expertise
              includes creating robust RESTful APIs, managing databases like
              MongoDB and PostgreSQL, and deploying full-scale projects. I am a
              collaborative developer passionate about writing clean, efficient
              code.
            </p>
          </div>
          <div className="flex justify-end items-center max-md:-order-1 w-[35rem] max-md:w-auto max-lg:w-[24rem] max-xl:w-[28rem]">
            <Image
              src={HeadingImage}
              height={225}
              width={400}
              alt="Julian"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

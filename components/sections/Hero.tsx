"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";
import { useTypewriter } from "@/components/useTypewriter";
import { roles, site, socials } from "@/lib/data";
import { btnPrimary, btnSecondary, iconLink } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="flex min-h-[100svh] items-center bg-white pb-12 pt-[calc(3.5rem+2rem)] md:pt-[calc(4rem+2rem)] lg:pt-[calc(5rem+2rem)]"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="order-1 lg:order-2 lg:col-span-5"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProfilePhoto
            priority
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 288px, (min-width: 640px) 208px, 128px"
            className="w-32 sm:w-52 md:w-72 lg:w-full lg:max-w-[400px]"
          />
        </motion.div>

        <motion.div
          className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-base text-body sm:text-lg">
            Hi there <span aria-hidden="true">👋</span> I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            aria-label={roles.join(", ")}
            className="mt-4 min-h-[2rem] font-display text-xl font-semibold text-black sm:text-2xl md:text-3xl"
          >
            <span aria-hidden="true">
              {typed}
              <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-1 animate-pulse bg-black" />
            </span>
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg lg:mx-0"
          >
            {site.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#contact" className={`${btnPrimary} sm:min-w-[11rem]`}>
              Hire me
            </a>
            <a href={site.resume} download className={`${btnSecondary} sm:min-w-[11rem]`}>
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconLink}
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

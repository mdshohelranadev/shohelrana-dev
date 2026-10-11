import { Briefcase, Mail, MapPin, User } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";
import { btnPrimary, btnSecondary } from "@/lib/utils";

const info = [
  { icon: User, text: site.name },
  { icon: Briefcase, text: "Full Stack Developer" },
  { icon: MapPin, text: site.location },
  { icon: Mail, text: site.email },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ProfilePhoto
            sizes="(min-width: 1024px) 448px, 80vw"
            className="w-[min(20rem,80vw)] lg:w-[min(28rem,100%)]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Full Stack Web Developer building modern web experiences
          </h2>
          <p className="mt-5 text-base text-body sm:text-lg">
            Hi! I&apos;m Md Shohel Rana — a passionate Full Stack Web Developer building fast,
            scalable, and user-friendly web applications.
          </p>
          <p className="mt-4 text-base text-body sm:text-lg">
            I specialize in Next.js, React, Supabase &amp; Tailwind CSS — turning complex ideas
            into clean, performant, and beautiful digital products.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {info.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-white p-4 text-sm text-black"
              >
                <Icon size={20} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-words">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={btnPrimary}>
              Let&apos;s talk
            </a>
            <a href={site.resume} className={btnSecondary}>
              My resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

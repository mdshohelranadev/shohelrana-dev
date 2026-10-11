import { Briefcase, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section bg-alt">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          title="Work Experience"
          subtitle="Where I've worked and what I've accomplished"
        />

        <ol className="relative mx-auto max-w-3xl space-y-8">
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-2 w-px bg-black" />
          {experiences.map((exp) => (
            <li key={exp.role + exp.company} className="relative pl-9">
              <span aria-hidden="true" className="absolute left-0 top-[1.6rem] flex h-[15px] w-[15px]">
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
                )}
                <span className="relative inline-flex h-[15px] w-[15px] rounded-full border-2 border-white bg-black" />
              </span>

              <Reveal>
                <article className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.current && (
                        <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                          Current
                        </span>
                      )}
                      <span className="rounded-full border border-black bg-white px-3 py-1 text-xs font-semibold text-black">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-black">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={16} aria-hidden="true" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={16} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-body">{exp.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

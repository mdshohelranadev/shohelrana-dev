"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projectFilters, projects } from "@/lib/data";
import { btnPrimary, cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section bg-alt">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          title="My Projects"
          subtitle="Some of my recent work and personal projects"
        />

        <div
          role="group"
          aria-label="Filter projects"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "min-h-[44px] rounded-lg border border-black px-4 text-sm font-semibold transition duration-200",
                filter === f ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <article className="card group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-video overflow-hidden bg-alt">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      quality={75}
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale transition duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                        <Star size={12} fill="currentColor" aria-hidden="true" />
                        Featured
                      </span>
                    )}
                    <span className="absolute right-3 top-3 rounded-full border border-black bg-white px-3 py-1 text-xs font-semibold text-black">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl">{project.title}</h3>
                    <p className="mt-2 text-sm text-body">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-black bg-white px-3 py-1 text-xs font-medium text-black"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-1">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(btnPrimary, "w-full")}
                        >
                          Live demo
                          <ExternalLink size={16} aria-hidden="true" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex h-12 w-full cursor-not-allowed items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-medium text-muted"
                        >
                          <span aria-hidden="true">🔨&nbsp;</span>Under Construction
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

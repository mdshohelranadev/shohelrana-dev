"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skillTabs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [active, setActive] = useState(skillTabs[0].id);
  const current = skillTabs.find((t) => t.id === active) ?? skillTabs[0];

  return (
    <section id="skills" aria-labelledby="skills-title" className="section bg-alt">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          title="My Skills"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div
          role="tablist"
          aria-label="Skill categories"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {skillTabs.map(({ id, label, icon: Icon }) => {
            const selected = id === active;
            return (
              <button
                key={id}
                id={`tab-${id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${id}`}
                onClick={() => setActive(id)}
                className={cn(
                  "flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-black px-3 text-sm font-semibold transition duration-200",
                  selected ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
                )}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.skills.map((skill, i) => (
              <div key={skill.name} className="rounded-xl border border-line bg-white p-5">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-black">{skill.name}</span>
                  <span className="font-bold text-black">{skill.level}%</span>
                </div>
                <div
                  className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/10"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className="h-full rounded-full bg-black"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.04, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

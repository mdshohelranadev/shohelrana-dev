"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { stats } from "@/lib/data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" aria-label="Statistics" className="bg-alt py-12 md:py-16">
      <div className="container-x grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, suffix, label }, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <div className="card flex h-full flex-col items-center p-6 text-center">
              <Icon size={32} strokeWidth={1.5} className="text-black" aria-hidden="true" />
              <p className="mt-4 font-display text-4xl font-bold text-black sm:text-5xl">
                <Counter to={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-sm text-body">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

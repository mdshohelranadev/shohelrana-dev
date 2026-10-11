import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { roadmap } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Roadmap() {
  return (
    <section id="roadmap" aria-labelledby="roadmap-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          id="roadmap-title"
          title="My Work Roadmap"
          subtitle="A transparent 6-step process from idea to launch"
        />

        <ol className="relative mx-auto max-w-5xl space-y-8 md:space-y-12">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-black md:left-1/2"
          />
          {roadmap.map(({ step, icon: Icon, title, duration, description }, i) => (
            <li key={step} className="relative pl-12 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-black md:left-1/2"
              />
              <Reveal
                className={cn(
                  "md:w-[calc(50%-2.5rem)]",
                  i % 2 === 1 && "md:ml-auto"
                )}
              >
                <article className="card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon size={32} strokeWidth={1.5} className="text-black" aria-hidden="true" />
                    <span className="font-display text-3xl font-bold text-muted">{step}</span>
                  </div>
                  <h3 className="mt-4 text-xl">{title}</h3>
                  <p className="mt-1 text-sm font-semibold text-black">{duration}</p>
                  <p className="mt-3 text-sm text-body">{description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

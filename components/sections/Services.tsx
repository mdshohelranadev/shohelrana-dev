import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          id="services-title"
          title="My Services"
          subtitle="End-to-end solutions for your digital needs"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article className="card group relative h-full overflow-hidden p-7">
                  <Icon size={40} strokeWidth={1.5} className="text-black" aria-hidden="true" />
                  <h3 className="mt-5 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"
                  />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

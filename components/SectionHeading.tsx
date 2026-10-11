import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
};

export default function SectionHeading({ title, subtitle, id, className }: Props) {
  return (
    <Reveal className={cn("mx-auto mb-10 max-w-2xl text-center md:mb-14", className)}>
      <h2 id={id} className="text-3xl sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base text-body sm:text-lg">{subtitle}</p>
    </Reveal>
  );
}

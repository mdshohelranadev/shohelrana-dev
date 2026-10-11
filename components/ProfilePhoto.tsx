import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data";

type Props = {
  className?: string;
  sizes: string;
  priority?: boolean;
};

/** Circular grayscale photo with a slowly rotating dashed black ring. */
export default function ProfilePhoto({ className, sizes, priority }: Props) {
  return (
    <div className={cn("relative mx-auto aspect-square", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-black/30"
      />
      <div className="absolute inset-2 overflow-hidden rounded-full border-[3px] border-black sm:inset-3 sm:border-4">
        <Image
          src={site.photo}
          alt={`Portrait of ${site.name}`}
          fill
          sizes={sizes}
          quality={75}
          priority={priority}
          className="object-cover grayscale"
        />
      </div>
    </div>
  );
}

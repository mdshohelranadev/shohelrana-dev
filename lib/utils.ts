import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const btnBase =
  "inline-flex h-12 min-w-[44px] items-center justify-center gap-2 rounded-lg border border-black px-6 text-sm font-semibold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0";

export const btnPrimary = cn(btnBase, "bg-black text-white");
export const btnSecondary = cn(btnBase, "bg-white text-black");

export const iconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-black bg-white text-black transition duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

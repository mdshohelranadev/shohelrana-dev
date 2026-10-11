"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { btnPrimary, cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 transition-shadow duration-300",
          scrolled && "shadow-sm"
        )}
      >
        <nav
          aria-label="Main"
          className="container-x flex h-14 items-center justify-between gap-4 md:h-16 lg:h-20"
        >
          <a
            href="#home"
            className="font-display text-sm font-bold tracking-tight text-black sm:text-base"
          >
            {site.brand}
          </a>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-wider text-black underline-offset-8 decoration-2 hover:underline xl:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className={cn(btnPrimary, "hidden h-11 px-5 lg:inline-flex")}>
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black text-black lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed right-0 top-0 z-[70] flex h-full w-[80%] max-w-sm flex-col bg-white p-6 shadow-xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-black">{site.brand}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black text-black"
                >
                  <X size={22} />
                </button>
              </div>
              <ul className="mt-8 flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-line">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[52px] items-center text-sm font-medium uppercase tracking-wider text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={cn(btnPrimary, "mt-8 w-full")}
              >
                Hire me
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

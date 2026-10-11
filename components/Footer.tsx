import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, footerSocials, site } from "@/lib/data";
import { iconLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3 md:gap-12">
        <div>
          <p className="font-display text-lg font-bold text-black">{site.brand}</p>
          <p className="mt-3 max-w-sm text-sm text-body">
            Full Stack Web Developer — building fast, modern and scalable web applications with
            Next.js, React, Node.js &amp; Supabase.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {footerSocials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className={iconLink}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-base">Quick Links</h3>
          <ul className="mt-4 space-y-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[36px] items-center text-sm text-body hover:text-black hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-base">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-body">
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-black hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-black hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <p className="text-center text-sm font-bold text-black">{site.brand}</p>
      </div>
    </footer>
  );
}

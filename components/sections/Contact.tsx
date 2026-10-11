"use client";

import { useState } from "react";
import { useForm, type FieldErrors, type Resolver } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Check, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/data";
import { btnPrimary, cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email"),
  subject: z.string().trim().min(3, "Please add a short subject"),
  message: z.string().trim().min(10, "Message should be at least 10 characters"),
  botcheck: z.boolean().optional(),
});
type FormValues = z.infer<typeof schema>;

// Small zod resolver so no extra dependency is needed.
const resolver: Resolver<FormValues> = async (values) => {
  const result = schema.safeParse(values);
  if (result.success) return { values: result.data, errors: {} };
  const errors: FieldErrors<FormValues> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof FormValues;
    if (!errors[key]) {
      (errors as Record<string, unknown>)[key] = { type: issue.code, message: issue.message };
    }
  }
  return { values: {}, errors };
};

const input =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-base text-black placeholder:text-muted transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black";

type Status = "idle" | "loading" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver, defaultValues: { botcheck: false } });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "51f47b3e-e61d-4404-ad79-b879333cb09d",
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "Portfolio Website",
          botcheck: data.botcheck ?? false,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Request failed");

      setStatus("success");
      toast.success("Message sent! I'll reply within 24 hours.");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
      toast.error("Couldn't send your message. Please try again or email me directly.");
    }
  };

  const fieldError = (name: keyof FormValues) =>
    errors[name]?.message ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm text-black">
        {String(errors[name]?.message)}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          id="contact-title"
          title="Let's Work Together"
          subtitle="Have a project in mind? Send me a message — I'll reply within 24 hours"
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-2">
            <ul className="space-y-4">
              <li className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                <Mail size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="min-w-0 break-all text-black hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                <Phone size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
                <a href={`tel:${site.phoneHref}`} className="text-black hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                <MapPin size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
                <span className="text-black">{site.location}</span>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[64px] items-center gap-4 rounded-xl border border-[#25D366] bg-[#25D366]/10 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="#25D366"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" />
                  </svg>
                  <span className="text-black">
                    <span className="block font-semibold">WhatsApp</span>
                    <span className="block text-sm text-body">Chat with me</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                <Clock size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-black" aria-hidden="true" />
                <span className="text-black">
                  <span className="block font-semibold">Response Time</span>
                  <span className="block text-sm text-body">Within 24 hours</span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5 rounded-2xl border border-line bg-white p-5 sm:p-8"
            >
              {/* Honeypot for Web3Forms spam protection */}
              <input
                type="checkbox"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("botcheck")}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={input}
                    {...register("name")}
                  />
                  {fieldError("name")}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={input}
                    {...register("email")}
                  />
                  {fieldError("email")}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-black">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={input}
                  {...register("subject")}
                />
                {fieldError("subject")}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(input, "resize-y")}
                  {...register("message")}
                />
                {fieldError("message")}
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={cn(btnPrimary, "w-full")}
              >
                {status === "loading" && (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <Check size={18} aria-hidden="true" />
                    Message sent!
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>

              <p className="text-center text-sm text-body">
                Your message goes directly to my Gmail inbox <span aria-hidden="true">📧</span>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

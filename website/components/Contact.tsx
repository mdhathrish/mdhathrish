"use client";

import { useState } from "react";
import Magnetic from "./Magnetic";

const EMAIL = "dhathrishmukkerla@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet — log the payload; email wiring comes later.
    // eslint-disable-next-line no-console
    console.log("[JW Studio] new enquiry:", form);
    setSent(true);
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          {/* Left — the big CTA */}
          <div>
            <p className="mono-label mb-6 flex items-center gap-3 text-acid">
              <span className="inline-block h-px w-10 bg-acid" />
              Start a project
            </p>
            <h2 className="display fluid-h2 tracking-tightest text-bone">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="text-acid">worth staring at.</span>
            </h2>

            <div className="mt-12">
              <p className="mono-label mb-3 text-bone-faint">
                Prefer email? Go direct
              </p>
              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${EMAIL}?subject=New%20project%20—%20JW%20Studio`}
                  data-cursor="Email"
                  className="group inline-flex items-center gap-3 text-2xl text-bone transition-colors hover:text-acid sm:text-3xl md:text-4xl"
                >
                  <span className="display tracking-tight underline decoration-ink-line decoration-2 underline-offset-8 transition-colors group-hover:decoration-acid">
                    {EMAIL}
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Right — the form */}
          <div className="rounded-3xl border border-ink-line bg-ink-soft p-6 sm:p-9">
            {sent ? (
              <div className="flex min-h-[22rem] flex-col items-start justify-center gap-5">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-acid text-2xl text-ink">
                  ✓
                </span>
                <h3 className="display text-2xl text-bone">
                  Logged — thank you.
                </h3>
                <p className="max-w-sm text-bone-dim">
                  This form logs to the browser console for now (check dev
                  tools). Email delivery gets wired up next. For anything
                  urgent, mail{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-acid underline underline-offset-4"
                  >
                    {EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", project: "" });
                  }}
                  className="mono-label text-bone-faint transition-colors hover:text-bone"
                >
                  ← Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-7">
                <Field
                  label="Your name"
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                />
                <label className="flex flex-col gap-2">
                  <span className="mono-label text-bone-faint">
                    About the project
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.project}
                    onChange={update("project")}
                    placeholder="A cinematic site for our new collection…"
                    className="resize-none border-b border-ink-line bg-transparent pb-3 text-lg text-bone placeholder:text-bone-faint/60 focus:border-acid focus:outline-none"
                  />
                </label>

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    data-cursor="Send"
                    className="group relative mt-2 overflow-hidden rounded-full bg-acid px-7 py-4 text-center text-base font-semibold text-ink"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover:text-acid">
                      Send enquiry
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                    <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="mono-label text-bone-faint">{label}</span>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-b border-ink-line bg-transparent pb-3 text-lg text-bone placeholder:text-bone-faint/60 focus:border-acid focus:outline-none"
      />
    </label>
  );
}

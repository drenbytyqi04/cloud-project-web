"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

type Status = "idle" | "loading" | "success";

const budgets = ["Under €2,000", "€2,000 – €10,000", "€10,000 – €50,000", "€50,000+"];
const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "Just researching"];

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!service) nextErrors.service = "Select the service you need.";
    if (!description) nextErrors.description = "Give us a brief description of the project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      e.currentTarget?.reset();
    }, 1200);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl glass p-12 text-center sm:p-16"
      >
        <CheckCircle2 className="h-14 w-14 text-accent" />
        <h3 className="font-display text-2xl font-medium text-foreground">Quote request received</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Thank you — our team will review your project details and follow up with a scoped quote within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 rounded-3xl glass p-8 sm:p-10">
      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">Your Details</legend>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full Name" name="name" required error={errors.name} placeholder="Arben Krasniqi" />
          <Field label="Company" name="company" placeholder="Metro Retail Group" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Email" name="email" type="email" required error={errors.email} placeholder="you@company.com" />
          <Field label="Phone" name="phone" type="tel" placeholder="+383 44 000 000" />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">Project Scope</legend>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            Service Needed <span className="text-accent">*</span>
          </span>
          <select
            name="service"
            className="h-12 rounded-xl border border-border-strong bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-background">
                {s.title}
              </option>
            ))}
          </select>
          <ErrorText message={errors.service} />
        </label>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">Estimated Budget</span>
            <select
              name="budget"
              className="h-12 rounded-xl border border-border-strong bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                Select a range
              </option>
              {budgets.map((b) => (
                <option key={b} value={b} className="bg-background">
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">Timeline</span>
            <select
              name="timeline"
              className="h-12 rounded-xl border border-border-strong bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                Select a timeline
              </option>
              {timelines.map((t) => (
                <option key={t} value={t} className="bg-background">
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        <Field label="Installation Location" name="location" placeholder="Prishtinë, Kosovo" />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            Project Description <span className="text-accent">*</span>
          </span>
          <textarea
            name="description"
            rows={5}
            placeholder="Tell us about the site, dimensions, and what you have in mind..."
            className="resize-none rounded-xl border border-border-strong bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
          />
          <ErrorText message={errors.description} />
        </label>
      </fieldset>

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-fit">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Quote Request
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function ErrorText({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-red-400"
        >
          {message}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-border-strong bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
      <ErrorText message={error} />
    </label>
  );
}

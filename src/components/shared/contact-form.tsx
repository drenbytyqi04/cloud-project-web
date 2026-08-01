"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

type Status = "idle" | "loading" | "success";

export function ContactForm({ withService = false }: { withService?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Tell us a little about your project.";

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
        className="flex flex-col items-center justify-center gap-4 rounded-3xl glass p-12 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-display text-xl font-medium text-foreground">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you — a member of our team will get back to you within one business day.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-3xl glass p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required error={errors.name} placeholder="Arben Krasniqi" />
        <Field label="Company" name="company" placeholder="Metro Retail Group" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required error={errors.email} placeholder="you@company.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+383 44 000 000" />
      </div>

      {withService && (
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Service Needed</span>
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
        </label>
      )}

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          Project Details <span className="text-accent">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your location, timeline and what you have in mind..."
          className="resize-none rounded-xl border border-border-strong bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-400"
            >
              {errors.message}
            </motion.span>
          )}
        </AnimatePresence>
      </label>

      <Button type="submit" size="lg" disabled={status === "loading"} className="mt-2 w-full sm:w-fit">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
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
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

type Status = "idle" | "loading" | "success";

export function ContactForm({ withService = false }: { withService?: boolean }) {
  const t = useTranslations("ContactForm");
  const tServices = useTranslations("Services.items");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) nextErrors.name = t("errorName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t("errorEmail");
    if (!message) nextErrors.message = t("errorMessage");

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
        <h3 className="font-display text-xl font-medium text-foreground">{t("successTitle")}</h3>
        <p className="max-w-sm text-sm text-muted-foreground">{t("successDescription")}</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          {t("sendAnother")}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-3xl glass p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={t("fullName")} name="name" required error={errors.name} placeholder={t("fullNamePlaceholder")} />
        <Field label={t("company")} name="company" placeholder={t("companyPlaceholder")} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={t("email")} name="email" type="email" required error={errors.email} placeholder={t("emailPlaceholder")} />
        <Field label={t("phone")} name="phone" type="tel" placeholder={t("phonePlaceholder")} />
      </div>

      {withService && (
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{t("serviceNeeded")}</span>
          <select
            name="service"
            className="h-12 rounded-xl border border-border-strong bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
            defaultValue=""
          >
            <option value="" disabled>
              {t("selectService")}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-background">
                {tServices(`${s.slug}.title`)}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          {t("projectDetails")} <span className="text-accent">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder={t("detailsPlaceholder")}
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
            {t("sending")}
          </>
        ) : (
          <>
            {t("submit")}
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

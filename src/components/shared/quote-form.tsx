"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

type Status = "idle" | "loading" | "success";

const budgetKeys = ["budgetUnder2k", "budget2to10k", "budget10to50k", "budgetOver50k"] as const;
const timelineKeys = ["timelineAsap", "timeline1Month", "timeline1to3Months", "timelineResearching"] as const;

export function QuoteForm() {
  const t = useTranslations("QuoteForm");
  const tServices = useTranslations("Services.items");
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

    if (!name) nextErrors.name = t("errorName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t("errorEmail");
    if (!service) nextErrors.service = t("errorService");
    if (!description) nextErrors.description = t("errorDescription");

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
        <h3 className="font-display text-2xl font-medium text-foreground">{t("successTitle")}</h3>
        <p className="max-w-md text-sm text-muted-foreground">{t("successDescription")}</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          {t("submitAnother")}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 rounded-3xl glass p-8 sm:p-10">
      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">{t("yourDetails")}</legend>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label={t("fullName")} name="name" required error={errors.name} placeholder={t("fullNamePlaceholder")} />
          <Field label={t("company")} name="company" placeholder={t("companyPlaceholder")} />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label={t("email")} name="email" type="email" required error={errors.email} placeholder={t("emailPlaceholder")} />
          <Field label={t("phone")} name="phone" type="tel" placeholder={t("phonePlaceholder")} />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">{t("projectScope")}</legend>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            {t("serviceNeeded")} <span className="text-accent">*</span>
          </span>
          <select
            name="service"
            className="h-12 rounded-xl border border-border-strong bg-surface px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
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
          <ErrorText message={errors.service} />
        </label>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">{t("estimatedBudget")}</span>
            <select
              name="budget"
              className="h-12 rounded-xl border border-border-strong bg-surface px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                {t("selectRange")}
              </option>
              {budgetKeys.map((key) => (
                <option key={key} value={t(key)} className="bg-background">
                  {t(key)}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">{t("timeline")}</span>
            <select
              name="timeline"
              className="h-12 rounded-xl border border-border-strong bg-surface px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                {t("selectTimeline")}
              </option>
              {timelineKeys.map((key) => (
                <option key={key} value={t(key)} className="bg-background">
                  {t(key)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label={t("installationLocation")} name="location" placeholder={t("locationPlaceholder")} />
          <Field label={t("dimensions")} name="dimensions" placeholder={t("dimensionsPlaceholder")} />
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            {t("projectDescription")} <span className="text-accent">*</span>
          </span>
          <textarea
            name="description"
            rows={5}
            placeholder={t("descriptionPlaceholder")}
            className="resize-none rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
          />
          <ErrorText message={errors.description} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{t("attachment")}</span>
          <input
            name="attachment"
            type="file"
            accept="image/*,.pdf"
            className="rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-muted-foreground outline-none transition-colors file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-xs file:font-medium file:text-accent-foreground focus:border-accent"
          />
        </label>
      </fieldset>

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-fit">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("submitting")}
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
        className="h-12 rounded-xl border border-border-strong bg-surface px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
      <ErrorText message={error} />
    </label>
  );
}

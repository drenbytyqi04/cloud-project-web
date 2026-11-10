import { useTranslations } from "next-intl";
import { faqKeys } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const t = useTranslations("FaqSection");

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" className="mx-auto" />

        <Accordion type="single" collapsible className="mt-14 w-full">
          {faqKeys.map((key) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
              <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

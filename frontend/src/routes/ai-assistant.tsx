import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { AiAssistantContent } from "@/components/dashboard/ai-assistant-content";
import { localeSearch } from "@/lib/locale";

export const Route = createFileRoute("/ai-assistant")({
  validateSearch: localeSearch,
  head: () => ({
    meta: [
      { title: "المساعد الذكي | AuraX" },
      { name: "description", content: "مساعد AuraX الذكي للإجابة عن أسئلة السلامة المهنية وتقييم المخاطر." },
      { property: "og:title", content: "AI Assistant | AuraX" },
      { property: "og:description", content: "Ask AuraX AI about workplace safety, hazards, PPE and emergency procedures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang } = Route.useSearch();
  return (
    <DashboardShell locale={lang} currentPath="/ai-assistant">
      <AiAssistantContent locale={lang} />
    </DashboardShell>
  );
}

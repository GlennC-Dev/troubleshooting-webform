import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "troubleshooting webform" },
      { name: "description", content: "A blank troubleshooting webform project." },
      { property: "og:title", content: "troubleshooting webform" },
      { property: "og:description", content: "A blank troubleshooting webform project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen bg-background" />;
}

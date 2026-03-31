import { HomePage } from "@/components/home-page";
import { loadSiteContent } from "@/lib/load-site-content";

export default async function Home() {
  const content = await loadSiteContent();

  return <HomePage content={content} />;
}

import NewsSection from "@/components/NewsSection/NewsSection";
import { NEWS } from "@/utils/news";

export default function Home() {
  return <NewsSection newsItems={NEWS} />;
}

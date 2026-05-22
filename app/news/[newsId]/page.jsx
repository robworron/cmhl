import NewsItem from "@/components/NewsItem/NewsItem";
import { NEWS } from "@/utils/news";

export default function NewsArticlePage({ params }) {
  const { newsId } = params;

  const newsItemData = NEWS.find((item) => {
    if (item.id === parseInt(newsId)) {
      return item;
    }
    return null;
  });

  console.log(newsItemData);
  return <NewsItem data={newsItemData} />;
}

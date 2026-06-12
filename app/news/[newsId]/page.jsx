import NewsItem from "@/components/NewsItem/NewsItem";
import { NEWS } from "@/utils/news";
import styles from "./newsarticlepage.module.css";

export default function NewsArticlePage({ params }) {
  const { newsId } = params;

  const newsItemData = NEWS.find((item) => {
    if (item.id === parseInt(newsId)) {
      return item;
    }
    return null;
  });

  return (
    <div className={styles.newsArticlePage}>
      <NewsItem data={newsItemData} />
    </div>
  );
}

import NewsCard from "@/components/NewsCard/NewsCard";
import { NEWS } from "@/utils/news";
import styles from "./news.module.css";

export default function NewsPage() {
  return (
    <section className={styles.newspage}>
      <h1>All News</h1>
      <div className={styles.newspageArticles}>
        {NEWS.map((item, index) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </div>
    </section>
  );
}

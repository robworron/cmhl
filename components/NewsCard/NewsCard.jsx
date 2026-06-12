import Image from "next/image";
import Link from "next/link";
import styles from "./newscard.module.css";

export default function NewsCard({ article }) {
  return (
    <Link href={`/news/${article.id}`} className={styles.newscard}>
      <div className={styles.newscardThumbnail}>
        <Image
          src={article.primaryImage}
          alt={`${article.date} news article photo`}
          fill
          style={{ borderRadius: 5 }}
        />
      </div>
      <div className={styles.newscardContent}>
        <div className={styles.newscardContentHeading}>
          <h5>{article.title}</h5>
          <h6>{article.date}</h6>
        </div>
        <p>{article.subtitle}</p>
      </div>
    </Link>
  );
}

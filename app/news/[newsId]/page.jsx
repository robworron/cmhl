import NewsItem from "@/components/NewsItem/NewsItem";
import { NEWS } from "@/utils/news";
import styles from "./newsarticlepage.module.css";

export async function generateMetadata({ params }) {
  const { newsId } = await params;
  const article = NEWS.find((item) => item.id === parseInt(newsId));

  if (!article) {
    return {
      title: "Article Not Found",
      alternates: { canonical: `/news/${newsId}` },
    };
  }

  return {
    title: article.title,
    description: article.subtitle,
    alternates: { canonical: `/news/${newsId}` },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `/news/${newsId}`,
      siteName: "CMHL",
      type: "article",
      images: [{ url: article.primaryImage, alt: article.title }],
    },
  };
}

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

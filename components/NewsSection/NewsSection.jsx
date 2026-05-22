import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./newssection.module.css";

export default function NewsSection({ newsItems }) {
  return (
    <section className={styles.newssection}>
      <Link
        href={`/news/${newsItems[0].id}`}
        className={styles.newssectionImage}
      >
        <Image
          src={newsItems[0].primaryImage}
          key={1}
          alt="News Section Image"
          fill
          style={{ borderRadius: 8, objectFit: "cover" }}
        />
        <div className={styles.newssectionImageOverlay}>
          <h2 className={styles.newssectionImageOverlayHeader}>
            {newsItems[0].title}
          </h2>
          <p className={styles.newssectionImageOverlaySubheader}>
            {newsItems[0].subtitle}
          </p>
          <p className={styles.newssectionImageOverlayDate}>
            {newsItems[0].date}
          </p>
        </div>
      </Link>
      <div className={styles.newssectionRecent}>
        <h3 className={styles.newssectionRecentHeader}>Recent News</h3>
        <ul>
          {newsItems.map((item, index) =>
            index === 0 || index > 7 ? null : (
              <div key={index} className={styles.newssectionRecentItem}>
                <li key={index}>
                  <Link href={`/news/${item.id}`}>{item.title}</Link>
                </li>
                <div className={styles.newssectionSeparator} />
              </div>
            ),
          )}
          <li>
            <Link href="/news">All Stories</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

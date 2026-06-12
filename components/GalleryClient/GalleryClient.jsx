"use client";

import React, { useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import styles from "./galleryclient.module.css";

export default function GalleryClient() {
  const [selectedDate, setSelectedDate] = useState("2026-03-20");

  const getPaths = (date) => {
    if (date === "2026-03-20") {
      return Array.from(
        { length: 164 },
        (_, index) => `/gallery/2026-03-20/img${index + 1}.webp`,
      );
    }
    return Array.from(
      { length: 232 },
      (_, index) => `/gallery/2026-03-27/img${index + 1}.webp`,
    );
  };

  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <div className={styles.galleryclient}>
      <div className={styles.galleryclientBody}>
        <div className={styles.galleryclientHeader}>
          <h1>2025-2026</h1>
          <Dropdown
            onSelect={handleDateChange}
            defaultValue={selectedDate}
            options={["2026-03-20", "2026-03-27"]}
          />
        </div>
        <section className={styles.galleryclientPhotoSection}>
          {getPaths(selectedDate).map((src, index) =>
            index + 1 !== 98 && index + 1 !== 99 && index + 1 !== 112 ? ( // brute force solution that specifically indexes the 3 images that are missing from the gallery and skips them
              <img key={index} src={src} alt={`Image ${index + 1}`} />
            ) : null,
          )}
        </section>
      </div>
    </div>
  );
}

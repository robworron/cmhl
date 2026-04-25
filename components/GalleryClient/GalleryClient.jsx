"use client";

import React, { useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import styles from "./galleryclient.module.css";

export default function GalleryClient() {
  const [selectedDate, setSelectedDate] = useState("2025-03-14");

  const getPaths = (date) => {
    if (date === "2025-03-14") {
      return Array.from(
        { length: 75 },
        (_, index) => `/images/2025-03-14/img${index + 1}.webp`,
      );
    }
    return Array.from(
      { length: 215 },
      (_, index) => `/images/2025-03-21/img${index + 1}.webp`,
    );
  };

  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <div className={styles.galleryclient}>
      <div className={styles.galleryclientBody}>
        <div className={styles.galleryclientHeader}>
          <h1>2024-2025</h1>
          <Dropdown
            onSelect={handleDateChange}
            defaultValue={selectedDate}
            options={["2025-03-14", "2025-03-21"]}
          />
        </div>
        <section className={styles.galleryclientPhotoSection}>
          {getPaths(selectedDate).map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
        </section>
      </div>
    </div>
  );
}

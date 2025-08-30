"use client";

import React, { useState } from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";

import styles from "./gallery.module.css";

export default function GalleryPage() {
  const [selectedDate, setSelectedDate] = useState("2025-03-14");

  const handleDateChange = (date) => setSelectedDate(date);

  const getPaths = (date) => {
    if (date === "2025-03-14") {
      return Array.from(
        { length: 75 },
        (_, index) => `/images/2025-03-14/img${index + 1}.JPG`
      );
    }
    return Array.from(
      { length: 215 },
      (_, index) => `/images/2025-03-21/img${index + 1}.JPG`
    );
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryBody}>
        <div className={styles.galleryHeader}>
          <h1>2024-2025</h1>
          <Dropdown
            dropdownSelection={handleDateChange}
            initialState="2025-03-14"
            selections={["2025-03-14", "2025-03-21"]}
          />
        </div>
        <section className={styles.galleryPhotoSection}>
          {getPaths(selectedDate).map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
        </section>
      </div>
    </div>
  );
}

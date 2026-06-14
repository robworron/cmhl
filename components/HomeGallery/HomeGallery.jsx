import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import styles from "./homegallery.module.css";

export default function HomeGallery() {
  return (
    <div className={styles.homegallery}>
      <div className={styles.homegalleryImage}>
        <Image src="/home/gallery-thumbnail.png" alt="Gallery Thumbnail" fill />
        <div className={styles.homegalleryOverlay}>
          <h2 className={styles.homegalleryOverlayHeader}>Gallery</h2>
          <p className={styles.homegalleryOverlaySubheader}>
            Browse latest photos from around the league
          </p>
          <div className={styles.homegalleryButton}>
            <Link href="/gallery">
              <Button label="See More" size="Medium" primary />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

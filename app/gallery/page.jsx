import GalleryClient from "@/components/GalleryClient/GalleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "Photo gallery for the CMHL. View images from recent games and events",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

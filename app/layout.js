import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import NavMenu from "@/components/NavMenu/NavMenu";
import { fetchSchedule } from "@/utils/fetchSchedule";
import { fetchWeekNum } from "@/utils/getWeekNum";
import Providers from "./Providers";
import config from "./config";

import "./globals.css";
import styles from "./webpage.module.css";

export const metadata = {
  metadataBase: new URL("https://www.cmhlniagara.com"),
  title: {
    default: "CMHL | Canucks Men's Hockey League",
    template: "%s | CMHL",
  },
  description:
    "Niagara men's recreational hockey league, based at the Gale Centre in Niagara Falls. Stats, schedules, and standings updated regularly.",
  openGraph: {
    title: "CMHL | Canucks Men's Hockey League",
    description:
      "Niagara's men's recreational hockey league at the Gale Centre in Niagara Falls — stats, schedules, and standings",
    url: "https://www.cmhlniagara.com",
    siteName: "CMHL",
    images: [
      {
        url: "https://www.cmhlniagara.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMHL | Canucks Men's Hockey League",
    description:
      "Niagara's men's recreational hockey league at the Gale Centre in Niagara Falls — stats, schedules, and standings",
    images: ["https://www.cmhlniagara.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({ children }) {
  const sportsOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "CMHL",
    url: "https://www.cmhlniagara.com/",
    logo: "https://www.cmhlniagara.com/logo-transparent-black.webp",
    sport: "Ice Hockey",
    location: {
      "@type": "Place",
      name: "Gale Centre",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5152 Thorold Stone Rd",
        addressLocality: "Niagara Falls",
        addressRegion: "ON",
        postalCode: "L2E 0A2",
        addressCountry: "CA",
      },
    },
    description:
      "Niagara's men's recreational hockey league at the Gale Centre in Niagara Falls — stats, schedules, and standings",
  };

  const schedule = await fetchSchedule(config.currentSeasonShort);
  const weekNum = await fetchWeekNum();

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sportsOrganizationSchema),
          }}
        />
        <Providers>
          <div className={styles.webpageHeader}>
            <Header scheduleData={schedule} weekNum={weekNum} />
            <NavBar />
          </div>
          <NavMenu />
          <main className={styles.webpageMain}>{children}</main>
          <div className={styles.webpageFooter}>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

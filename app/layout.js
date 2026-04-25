import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import NavMenu from "@/components/NavMenu/NavMenu";
import Providers from "./Providers";

import "./globals.css";
import styles from "./webpage.module.css";

export const metadata = {
  title: {
    default: "CMHL | Canucks Men's Hockey League",
    template: "%s | CMHL",
  },
  description:
    "Niagara's most competitive men's recreational hockey league, based at the Gale Centre in Niagara Falls. Stats, schedules, and standings updated regularly.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={styles.webpageHeader}>
            <Header />
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

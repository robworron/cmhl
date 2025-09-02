import { Header } from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";

import { ScheduleProvider } from "@/contexts/2025_ScheduleContext";
import { MenuProvider } from "@/contexts/MenuContext";

import "./globals.css";
import styles from "./webpage.module.css";
import { NavMenu } from "@/components/NavMenu/NavMenu";

export const metadata = {
  title: "CMHL",
  description: "Canucks Men's Hockey League",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScheduleProvider>
          <MenuProvider>
            <div className="webpage">
              <div className={styles.webpageHeader}>
                <Header />
                <NavBar />
              </div>
              <NavMenu />
              <main>{children}</main>
              <div className={styles.webpageFooter}>
                <Footer />
              </div>
            </div>
          </MenuProvider>
        </ScheduleProvider>
      </body>
    </html>
  );
}

import Image from "next/image";
import { CONTACT_ICON, PIN_ICON, RINK_ICON_BLACK } from "@/utils/icons";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Contact the CMHL for inquiries, concerns, or comments about the Canucks Men's Hockey League",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div>
        <h1>Contact Us</h1>
        <h4>
          Reach out to us in regards to any inquiries, concerns, or comments
          about the CMHL
        </h4>
      </div>
      <section className={styles.contactInfoSection}>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoLogo}>
            <Image
              src={"/assets/logos/logo-transparent-black.webp"}
              alt="Canucks Men's Hockey League's Logo"
              fill
            />
          </div>
          <h3>Canucks Men's Hockey League (CMHL)</h3>
          <div className={styles.contactInfoLine}>
            <div className={styles.contactInfoIcon}>{CONTACT_ICON}</div>
            <a
              href="mailto:cmhlniagara@gmail.com"
              style={{ textDecoration: "none", color: "#222" }}
            >
              cmhlniagara@gmail.com
            </a>
          </div>
          <div className={styles.contactInfoLine}>
            <div className={styles.contactInfoIcon}>{PIN_ICON}</div>5152 Thorold
            Stone Road, Niagara Falls, Ontario
          </div>
          <div className={styles.contactInfoLine}>
            <div className={styles.contactInfoIcon}>{RINK_ICON_BLACK}</div>Gale
            Centre Arena
          </div>
        </div>
        <div className={styles.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.576956929278!2d-79.08301972269757!3d43.11340458717397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d343335dd266eb%3A0x24fde19a0567a837!2sGale%20Centre%20Arena!5e0!3m2!1sen!2sca!4v1782764730896!5m2!1sen!2sca"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
      <section>
        <ContactForm />
      </section>
    </div>
  );
}

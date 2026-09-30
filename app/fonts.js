import { Archivo, Inter, Work_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

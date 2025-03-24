import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";

//Custom font Installing
const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["400"],
});

//Default Fonts
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "banquee.",
  description: "Virtual Card",
};
//For Defalt font
//${geistSans.variable} ${geistMono.variable}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

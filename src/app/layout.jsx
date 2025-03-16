import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Oswald, Monoton } from "next/font/google";

//Custom font Installing
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
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
      <body className={`${oswald.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import Navbar from "@/components/Global/navbar/Navbar";
import NavMobile from "@/components/Global/NavMobile/NavMobile";

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;
export const metadata = {
  title: "Amr - Portfolio",
  description: "My personal portfolio / Amr Hesham - Frontend Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mianBg__gradient`}>
        <Navbar />
        <NavMobile />
        {children}
      </body>
    </html>
  );
}

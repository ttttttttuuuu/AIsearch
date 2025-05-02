import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIsearch - 智能AI工具推荐平台",
  description: "为您推荐最适合的AI工具，提升工作效率",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-[#F5F5DC] min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

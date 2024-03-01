import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio Stash",
  description: "Studio Stash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{margin: '0'}}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}

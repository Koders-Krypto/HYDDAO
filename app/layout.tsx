import "./globals.css";
import { Inter } from "next/font/google";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>Hyderabad DAO</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </head>
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}

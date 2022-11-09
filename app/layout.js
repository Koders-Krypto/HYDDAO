import "./globals.css";
import { Silkscreen } from "@next/font/google";

const silkscreen = Silkscreen({ weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={silkscreen.className}>
      <body>{children}</body>
    </html>
  );
}

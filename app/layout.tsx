import "./globals.css";
import { Poppins } from "next/font/google";
import Query from "./common/Query";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <title>Hyderabad DAO</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </head>
      <body className="bg-gray-300">
        <Query>{children}</Query>
      </body>
    </html>
  );
}

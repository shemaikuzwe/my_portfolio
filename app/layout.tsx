import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins} from "next/font/google"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins=Poppins({
  subsets:["latin"],
  weight:["200","400","500"],
 
})
export const metadata: Metadata = {
  title: "Elie",
  description: "IKUZWE SHEMA Elie a Fullstack Developer in next js and Typescript",
  icons:{
    icon:"/favicon-96x96.png",
    apple:"/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

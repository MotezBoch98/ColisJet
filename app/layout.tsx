// /app/layout.tsx
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Footer from "./ui/footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "ColisJet Dashboard",
  },
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
  description: "The web app for tracking your deliveries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-full`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

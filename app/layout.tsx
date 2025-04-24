// /app/layout.tsx
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "ColisJet Dashboard",
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
      <body
        className={`${inter.className} antialiased flex flex-col min-h-full`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

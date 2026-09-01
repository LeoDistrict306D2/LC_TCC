import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leo Club of Sample City | Leadership, Experience & Opportunity",
  description:
    "Leo Club of Sample City – A non-profit youth organization committed to community service, leadership, and humanitarian efforts. Join us in making a difference.",
  keywords: "Leo Club, Sample City, community service, leadership, volunteers, non-profit",
  openGraph: {
    title: "Leo Club of Sample City",
    description: "Leading with purpose, serving with heart.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

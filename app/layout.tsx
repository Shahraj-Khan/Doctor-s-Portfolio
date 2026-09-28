import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Thomas | Internal Medicine Specialist",

  description:
    "Dr. Amelia Thomas is an Internal Medicine specialist providing thoughtful, evidence-based care in chronic disease management, hypertension, and preventive health.",

  keywords: [
    "Dr. Amelia Thomas",
    "Internal Medicine Specialist",
    "Internal Medicine Physician",
    "Chronic Disease Management",
    "Hypertension Care",
    "Preventive Healthcare",
    "Medical Consultation",
  ],

  openGraph: {
    title: "Dr. Amelia Thomas | Internal Medicine Specialist",
    description:
      "Thoughtful, evidence-based Internal Medicine care focused on chronic disease management, hypertension, and preventive health.",
    type: "website",
    siteName: "Dr. Amelia Thomas",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Amelia Thomas | Internal Medicine Specialist",
    description:
      "Thoughtful, evidence-based Internal Medicine care focused on chronic disease management, hypertension, and preventive health.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

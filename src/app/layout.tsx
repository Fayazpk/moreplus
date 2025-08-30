import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MorePlus Detergents",
  description:
    "Discover our range of high-quality cleaning solutions designed to meet all your household and industrial needs.",
  openGraph: {
    title: "MorePlus Detergents",
    description:
      "High-quality detergent powders and liquids from MorePlus.",
    url: "https://moreplus.com",
    siteName: "MorePlus Detergents",
    images: [
      {
        url: "/moreplus.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

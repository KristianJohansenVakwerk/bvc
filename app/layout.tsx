import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bornholm Vinegar Company",
  description:
    "Mikro-eddikebryggeri på Bornholm, der fremstiller håndværkseddiker i små batch med udgangspunkt i Bornholms råvarer og de skiftende årstider. Opdag vores unikke eddiker som Pærecidereddike, Gastrik, Hybenroseeddike og flere.",
  keywords: [
    "Bornholm Vinegar Company",
    "håndværkseddike",
    "eddike Bornholm",
    "pærecidereddike",
    "æblecidereddike",
    "gastrik",
    "hybenroseeddike",
    "hyldeblomsteddike",
    "kombueddike",
    "estragoneddike",
    "krondildeddike",
    "mikro-eddikebryggeri",
    "levende eddike",
    "upasteuriseret eddike",
    "dansk eddike",
    "fermenteret eddike",
    "lokale råvarer",
    "bæredygtig eddike",
  ],
  authors: [{ name: "Bornholm Vinegar Company" }],
  creator: "Bornholm Vinegar Company",
  publisher: "Bornholm Vinegar Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bornholmvinegar.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bornholm Vinegar Company - Håndværkseddiker fra Bornholm",
    description:
      "Mikro-eddikebryggeri på Bornholm, der fremstiller håndværkseddiker i små batch med udgangspunkt i Bornholms råvarer og de skiftende årstider.",
    url: "https://bornholmvinegar.co",
    siteName: "Bornholm Vinegar Company",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/media/BVC_Logo.svg",
        width: 1200,
        height: 630,
        alt: "Bornholm Vinegar Company Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bornholm Vinegar Company - Håndværkseddiker fra Bornholm",
    description:
      "Mikro-eddikebryggeri på Bornholm, der fremstiller håndværkseddiker i små batch med udgangspunkt i Bornholms råvarer og de skiftende årstider.",
    images: ["/media/BVC_Logo.svg"],
    creator: "@bornholmvinegarco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Food & Beverage",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giustorisarcimento.info"),
  title: {
    default: "Giusto Risarcimento - Studio Varsallona | Risarcimenti Assicurativi",
    template: "%s | Giusto Risarcimento",
  },
  description:
    "Studio legale specializzato in risarcimenti assicurativi. 20+ anni di esperienza, zero anticipi, paghi solo a risultato ottenuto. Consulenza gratuita.",
  keywords: [
    "risarcimento danni",
    "incidenti stradali",
    "malasanità",
    "infortuni sul lavoro",
    "avvocato risarcimento",
    "studio legale",
    "Varsallona",
    "consulenza gratuita",
    "zero anticipo",
  ],
  authors: [{ name: "Studio Varsallona" }],
  creator: "Studio Varsallona",
  publisher: "Giusto Risarcimento",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://giustorisarcimento.info",
    siteName: "Giusto Risarcimento - Studio Varsallona",
    title: "Giusto Risarcimento - Studio Varsallona | Risarcimenti Assicurativi",
    description:
      "Studio legale specializzato in risarcimenti assicurativi. 20+ anni di esperienza, zero anticipi, paghi solo a risultato ottenuto.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giusto Risarcimento - Studio Varsallona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giusto Risarcimento - Studio Varsallona",
    description:
      "Studio legale specializzato in risarcimenti assicurativi. 20+ anni di esperienza, zero anticipi.",
    images: ["/og-image.jpg"],
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
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

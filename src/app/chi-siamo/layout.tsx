import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo | Giusto Risarcimento - Studio Varsallona",
  description:
    "Scopri la storia dello Studio Varsallona. 20+ anni di esperienza nei risarcimenti assicurativi. Empatia, professionalità e risultati.",
};

export default function ChiSiamoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


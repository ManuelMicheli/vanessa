import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi | Giusto Risarcimento",
  description:
    "Scopri i nostri servizi di assistenza legale per risarcimenti: incidenti stradali, malasanità, infortuni sul lavoro. Consulenza gratuita e zero anticipo.",
};

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


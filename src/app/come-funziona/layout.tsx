import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come Funziona | Giusto Risarcimento",
  description:
    "Scopri come funziona il nostro servizio: zero anticipo, consulenza gratuita, paghi solo a risultato ottenuto. Il processo spiegato passo passo.",
};

export default function ComeFunzionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


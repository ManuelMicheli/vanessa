import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonianze | Giusto Risarcimento",
  description:
    "Leggi le testimonianze dei nostri clienti. Storie vere di persone che hanno ottenuto il giusto risarcimento grazie al nostro supporto.",
};

export default function TestimonianzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


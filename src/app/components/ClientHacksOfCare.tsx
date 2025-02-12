"use client";

import dynamic from "next/dynamic";

// Importation dynamique du composant HacksOfCare avec SSR désactivé
const HacksOfCare = dynamic(() => import("./HacksOfCare"), { ssr: false });

export default function ClientHacksOfCare() {
  return <HacksOfCare />;
}

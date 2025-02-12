// src/app/components/HacksOfCare.tsx
"use client"; // Doit être placé tout en haut !

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const hacks = [
  "Recycler les technologies par la pratique artistique",
  "Penser : Cycles de vie multiples",
  "Upcycler, transformer/muter les matières",
  "Mettre à jour certains des usages actuels des technologies",
  "Imaginer des usages alternatifs aux technologies",
  "Penser low-tech",
  "Penser mid-tech",
  "Penser technologies conviviales",
  "Prototyper des technologies locales",
  "Créer de nouveaux récits",
  "Raconter à nouveau des vieilles histoires",
  "Encourager la pluralité des récits",
  "Résister à l’homogéinisation des désirs",
  "Re-représenter l’Histoire",
  "Débusquer le déterminisme technologique",
  "Développer une science fiction positive",
  "Développer une science fiction écologique",
  "Développer une science fiction queer",
  "Créer des virus",
  "Penser comme un virus",
  "Créer des prototypes pour encourager une discussion sur l’éthique des technologies",
  "Démystifier la création technologique",
  "Re-mystifier avec la création technologique",
  "Repenser la mise à distance scientifique",
  "Questionner le empathic taboo",
  "Faire un usage informé du pouvoir empathique de l’art",
  "Cultiver et encourager la compassion",
  "Mettre à jour le caractère matériel et minéral des technologies",
  "Prendre conscience des dynamiques extractivistes et coloniales derrière les technologies",
  "Accepter et célébrer le weird, le trouble, la queerness et le mélange",
  "Mettre en relation des actants sans hiérarchie",
  "Etre à l’écoute",
  "Douter",
  "Troubler",
  "It’s not a bug, it’s a feature!",
  "Construire avec le vide",
  "Construire avec l’échec",
  "Construire avec l’accident",
  "Construire avec l’imprévu",
  "Réparer",
  "Tout déconstruire",
  "Encourager la collaboration et l’entraide",
  "Collaborer",
  "S’entraider",
  "Mettre en commun",
  "Faire confiance",
  "Utiliser / s’impliquer dans les espaces de fabrication partagés",
  "Penser libre",
  "Partager ses recherches sous license copyleft",
  "Penser copyleft",
  "Partager par le biais d’ateliers d’artistes",
  "Citer les personnes et les remercier",
  "Permettre une reconnection avec les émotions cachées derrière la honte et la culpabilité",
  "Prendre soin de la tristesse",
  "Prendre soin du sentiment de honte écologique",
  "Débinariser TOUT",
  "Déconstruire les dualismes",
  "Naturecultures",
  "Laisser de la place à d’autres ontologies",
  "Respecter la diversité des modes de pensée",
  "Aider les humain·e·s à remettre en question les présupposés issus du cartésianisme",
  "Essayer d’accepter et aider à accepter l’impermanence",
  "Mettre en valeur une pensée interrelationnelle",
  "Transdisciplinariser",
  "Permettre un dialogue",
  "Jouer avec le caractère thérapeutique de l’art",
  "Permettre une reconnexion au corps",
  "Prendre des pauses",
  "Proposer des pauses",
  "Se reposer",
  "Transmettre par le sensible",
  "Prendre en compte les dépenses énergétiques des projets créés",
  "Négocier un équilibre entre impact et moyens de sensibilisation",
  "Utiliser l’art et la technologie comme outils de guérison",
  "Participer :",
];

function HackCard({ hack, fontSize, autoReveal }: { hack: string; fontSize: string; autoReveal: boolean }) {
  // Déclaration inconditionnelle du hook
  const [revealed, setRevealed] = useState(false);

  if (autoReveal) {
    // Sur mobile : révélation automatique dès que l'élément est dans le viewport
    return (
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        style={{ cursor: "pointer", padding: "1rem", textAlign: "center" }}
      >
        <span
          style={{
            color: "white",
            fontSize: fontSize,
            textShadow: "1px 1px 2px rgba(128,128,128,0.5)",
          }}
        >
          {hack}
        </span>
      </motion.div>
    );
  } else {
    // Sur desktop : révélation au survol
    return (
      <div
        onMouseEnter={() => {
          if (!revealed) setRevealed(true);
        }}
        style={{ cursor: "pointer", padding: "1rem", textAlign: "center" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: "white",
            fontSize: fontSize,
            textShadow: "1px 1px 2px rgba(128,128,128,0.5)",
          }}
        >
          {hack}
        </motion.span>
      </div>
    );
  }
}

export default function HacksOfCare() {
  const [isClient, setIsClient] = useState(false);
  const [columns, setColumns] = useState(3);
  const [fontSize, setFontSize] = useState("2rem");

  useEffect(() => {
    setIsClient(true);

    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setColumns(1);
        setFontSize("1.5rem");
      } else if (width < 900) {
        setColumns(2);
        setFontSize("1.75rem");
      } else {
        setColumns(3);
        setFontSize("2rem");
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  if (!isClient) return null;

  const isMobile = columns === 1;
  const gridTop = isMobile ? "10%" : "30%"; // Espace entre le logo et la grille
  const gridGap = isMobile ? "0.5rem" : "1rem"; // Espacement entre les hacks
  const gridHeight = isMobile ? "80%" : "65%";

  const logoContainerStyle = {
    position: "absolute" as const,
    top: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    width: isMobile ? "80%" : "750px",
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      {/* Vidéo de fond */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <video style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay loop muted playsInline>
          <source src="/gradientvid2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Logo et lien vers la page explicative */}
      <div style={logoContainerStyle}>
        <img src="/hacksofcare_logo.png" alt="Hacks of Care Logo" style={{ width: "100%", height: "auto" }} />
        <Link href="/about" legacyBehavior>
          <a
            style={{
              position: "absolute",
              right: "-3rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: isMobile ? "2rem" : "5rem", // Sur desktop, le * est plus gros
              textDecoration: "none",
            }}
          >
            *
          </a>
        </Link>
      </div>

      {isMobile ? (
        <motion.div
          className="hack-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          style={{
            position: "absolute",
            top: gridTop,
            left: "10%",
            width: "80%",
            height: gridHeight,
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: gridGap,
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
          }}
        >
          {hacks.map((hack, index) => (
            <HackCard key={index} hack={hack} fontSize={fontSize} autoReveal={true} />
          ))}
        </motion.div>
      ) : (
        <div
          className="hack-grid"
          style={{
            position: "absolute",
            top: gridTop,
            left: "10%",
            width: "80%",
            height: gridHeight,
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: gridGap,
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
          }}
        >
          {hacks.map((hack, index) => (
            <HackCard key={index} hack={hack} fontSize={fontSize} autoReveal={false} />
          ))}
        </div>
      )}

      <style jsx>{`
        .hack-grid::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

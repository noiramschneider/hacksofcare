// src/app/about/page.tsx
"use client";

import Link from "next/link";
import localFont from "next/font/local";

// Import de la police Steps‑Mono depuis public/fonts/Steps-Mono.otf
const stepsMono = localFont({
  src: "/fonts/Steps-Mono.otf",
  variable: "--font-steps-mono",
  display: "swap",
});

export default function About() {
  return (
    <div
      className={`container ${stepsMono.className}`}
      style={{ fontFamily: stepsMono.style.fontFamily }}
    >
      {/* En-tête avec le bloc logo + icône PDF centré horizontalement */}
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <img
              src="/hacksofcare_logo2.png"
              alt="Hacks of Care Logo"
              className="logo"
            />
          </Link>
          <Link href="/hacks-of-care.pdf" legacyBehavior>
            <a className="pdf-link" download>
              <img
                src="/book-icon.svg"
                alt="Télécharger la version PDF"
                className="pdf-icon"
              />
            </a>
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="main">
        <p className="paragraph">
          Hacks of care est un kit de survie, une boite à outils collaborative pour s&#39;hacktiver écologiquement. 
          Elle se concrétise en une liste d&#39;action à s&#39;approprier, partager et bonifier pour s&#39;aider collectivement 
          et se mettre à l&#39;action face à la réalité de la situation écologique.
        </p>
        <p className="paragraph">
          L&#39;idée est issue du projet de recherche à la maitrise de l&#39;artiste{" "}
          <a
            href="https://schneidermarion.net"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Marion Schneider
          </a>{" "}
          intitulé&nbsp;:{" "}
          <em>
            Machines sensibles, inventions queer : une approche hacktiviste et écoféministe de l&#39;art numérique
          </em>
          , et constitue une tentative de réponse à la question : comment continuer à créer avec les technologies 
          étant donné la situation écologique actuelle?
        </p>
        <p className="paragraph">
          Si vous êtes artiste, hacker, théoricien·ne de l&#39;art, ou simplement inspiré·e par la question, 
          vous pouvez contribuer à faire grandir la liste en envoyant vos idées à hacksofcare@gmail.com.
        </p>
      </main>

      <style jsx>{`
        .container {
          background-color: #f0f0f0;
          min-height: 100vh;
          padding: 2rem;
        }
        .header {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .logo {
          cursor: pointer;
          width: 750px;
        }
        .pdf-link {
          text-decoration: none;
        }
        .pdf-icon {
          width: 40px;
          height: auto;
          filter: grayscale(100%);
        }
        .main {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.25rem;
          line-height: 1.6;
          color: #333;
        }
        .paragraph {
          margin-bottom: 1rem;
        }
        .link {
          color: inherit;
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .logo {
            width: 80%;
          }
          .pdf-icon {
            width: 30px;
          }
          .logo-container {
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

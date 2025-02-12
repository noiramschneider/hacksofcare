// src/app/about/page.tsx
"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      {/* En-tête avec le logo cliquable pour revenir à la page d'accueil */}
      <header className="header">
        <Link href="/">
          <img
            src="/hacksofcare_logo.png"
            alt="Hacks of Care Logo"
            className="logo"
          />
        </Link>
      </header>

      {/* Contenu principal */}
      <main className="main">
        <p className="paragraph">
          Hacks of care est une boite à outils collaborative pour
          s'hacktiver écologiquement. Elle se concrétise en une liste d’action à s’approprier,
          partager et bonifier pour s’aider collectivement et se mettre à l’action face à la
          réalité de la situation écologique.
        </p>
        <p className="paragraph">
          L'idée est issue du projet de recherche à la maitrise de l'artiste{" "}
          <a
            href="https://schneidermarion.net"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Marion Schneider
          </a>{" "}
          intitulé : 
          <em>
            Machines sensibles, inventions queer : une approche hacktiviste et écoféministe de l'art
            numérique
          </em>
          , et constitue une tentative de réponse à la question : comment continuer à créer avec
          les technologies étant donné la situation écologique actuelle ?
        </p>
        <p className="paragraph">
          Si vous êtes artiste, hacker, théoricien·ne de l'art, ou simplement inspiré·e par la
          question, vous pouvez contribuer à faire grandir la liste en envoyant vos idées à hacksofcare@gmail.com.
        </p>
      </main>

      <style jsx>{`
        .container {
          background-color: #f0f0f0; /* Fond gris clair */
          min-height: 100vh;
          padding: 2rem;
        }
        .header {
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
        }
        .logo {
          cursor: pointer;
          width: 750px; /* Taille fixe sur desktop */
        }
        .main {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.25rem;
          line-height: 1.6;
          color: #333;
        }
        .paragraph {
          margin-bottom: 1rem; /* Espace entre les paragraphes */
        }
        .link {
          color: inherit;
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .logo {
            width: 80%; /* Sur mobile, le logo occupe 80% de la largeur */
          }
        }
      `}</style>
    </div>
  );
}

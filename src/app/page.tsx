// src/app/page.tsx
import Head from "next/head";
import ClientHacksOfCare from "./components/ClientHacksOfCare";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hacks of Care</title>
      </Head>
      <main>
        <ClientHacksOfCare />
      </main>
    </>
  );
}

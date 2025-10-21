import Head from "next/head";
import Navbar from "@/components/Navbar";
import Portfolio from "@/sections/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio | SmartLens Photography</title>
        <meta name="description" content="SmartLens Photography Portfolio" />
      </Head>

      <main className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Portfolio />
      </main>
    </>
  );
}

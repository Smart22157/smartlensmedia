// pages/about.tsx
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About SmartLens Photography</title>
        <meta name="description" content="Learn more about SmartLens Photography, our team, and mission" />
      </Head>

      <main className="bg-gray-900 text-white min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-24 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About SmartLens Photography</h1>
          <p className="text-gray-300 max-w-3xl mb-6">
            At SmartLens, we believe every moment tells a story. From corporate events to weddings, portraits, drone shots, and livestreams, our passion is capturing your life’s unforgettable moments in the most professional way.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="/images/crew/whole-crew.jpg"
            alt="SmartLens Team"
            className="w-full md:w-1/2 rounded shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded with a vision to turn fleeting moments into lasting memories, SmartLens Photography has grown into a trusted team of photographers and videographers. Every project we take on is treated with creativity, attention to detail, and a commitment to excellence.
            </p>
            <p className="text-gray-300">
              Over the years, we have captured countless stories, blending modern technology with artistic vision to deliver imagery that resonates and inspires. Our team thrives on passion, innovation, and a love for the art of photography and videography.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-300">
                To capture your life’s most important moments with creativity, professionalism, and care, delivering visuals that tell stories that last a lifetime.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-300">
                To be a leading photography and livestreaming brand in Kenya, known for innovation, artistry, and bringing unforgettable experiences to life.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Team Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/images/crew/smart.jpg" alt="Geoffrey" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Geoffrey Muchangi</h3>
              <p className="text-red-600 font-semibold">Photographer</p>
            </div>
            <div className="text-center">
              <img src="/images/crew/sam.jpg" alt="Samuel" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Samuel Njuki</h3>
              <p className="text-red-600 font-semibold">Videographer</p>
            </div>
            <div className="text-center">
              <img src="/images/crew/james.jpg" alt="James" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">James Njuki</h3>
              <p className="text-red-600 font-semibold">Videographer</p>
            </div>
            <div className="text-center">
              <img src="/images/crew/cynthia.jpg" alt="Cynthia" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Cynthia Nyokabi</h3>
              <p className="text-red-600 font-semibold">Designer</p>
            </div>
             <div className="text-center">
              <img src="/images/crew/gathoni.jpg" alt="gathoni" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Virginia Gathoni</h3>
              <p className="text-red-600 font-semibold">Social Media Marketer</p>
            </div>
          </div>
          
        </section>
      </main>
    </>
  );
}



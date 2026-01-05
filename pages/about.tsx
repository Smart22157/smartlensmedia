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
            src="https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536082/whole-crew_bldyvw.jpg"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://res.cloudinary.com/dqt3j0uif/image/upload/v1767612755/IMG_9585_v4w69m.jpg" alt="Mesapotamia Properties" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Mesapotamia Properties</h3>
              <p className="text-red-600 font-semibold">We sell land for you to make a home</p>
            </div>
            <div className="text-center">
              <img src="https://res.cloudinary.com/dqt3j0uif/image/upload/v1767535768/grad6_vceum4.jpg" alt="Grace Mahar" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Grace Mahar</h3>
              <p className="text-red-600 font-semibold">Handle her Graduation</p>
            </div>
            <div className="text-center">
              <img src="https://res.cloudinary.com/dqt3j0uif/image/upload/v1767612460/waringa_fomvn4.jpg" alt="Rachael Waringa" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Rachael Waringa</h3>
              <p className="text-red-600 font-semibold">Handle her Daughters Birthday</p>
            </div>
            <div className="text-center">
              <img src="https://res.cloudinary.com/dqt3j0uif/image/upload/v1767612800/Happy_new_year_-_Made_with_PosterMyWall_uuxaix.jpg" alt="Pcea Church" className="w-full rounded shadow-lg mb-4" />
              <h3 className="text-xl font-bold">Pcea Elijah Wathika Church</h3>
              <p className="text-red-600 font-semibold">Handle all Sunday Livestreams</p>
            </div>
  <div className="text-center">
  <img 
    src="https://res.cloudinary.com/dqt3j0uif/image/upload/v1767612910/a45d2ec2-6bcc-4d0d-985c-414238879e4e.png" 
    alt="Eva Harris" 
    className="w-full rounded shadow-lg mb-4" 
  />
  <h3 className="text-xl font-bold">Eva Harris</h3>
  <a 
    href="https://www.youtube.com/watch?v=RwbvftVnVno" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-red-600 font-semibold hover:underline"
  >
    Produced Her Second Song: Gatuma Gathiru
  </a>
</div>
</div>
  
          
        </section>
      </main>
    </>
  );
}



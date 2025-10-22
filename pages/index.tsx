import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

interface CrewMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const crew: CrewMember[] = [
  {
    name: "Geoffrey Muchangi",
    role: "Photographer, Videographer",
    description:
      "Sometimes the grandest shots are in tiny details. Macro shots of water droplets, leaves, or textures tell stories of the natural world. In video, slow reveals focusing on a dewdrop before pulling back to a vast landscape create cinematic tension.",
    image: "/images/crew/smart.jpg",
  },
  {
    name: "Samuel Njuki",
    role: "Videographer,photographer",
    description:
      "In photography, a slight motion blur can convey movement; in video, motion is your language. Experiment with slow-motion to emphasize emotion, hyperlapse to show time passing, or panning shots to lead the eye through a scene.",
    image: "/images/crew/sam.jpg",
  },
  {
    name: "James Njuki",
    role: "Videographer",
    description:
      "A still photo freezes emotion, but video lets it breathe. A laugh, a tear, a handshake, or a fleeting glance—these tiny human moments become cinematic gold.",
    image: "/images/crew/james.jpg",
  },
  {
    name: "Cynthia Nyokabi",
    role: "Designer",
    description:
      "A designer is more than someone who arranges colors and shapes. A designer is a storyteller  one who translates emotion, culture, and imagination into visuals that speak louder than words. At SmartLens, our designer is the bridge between creativity and purpose. Every poster, logo, or layout is carefully crafted to make people feel something connection, excitement, belonging.",
    image: "/images/crew/cynthia.jpg",
  },
  {
    name: "Virginia Gathoni",
    role: "Social Media Marketer",
    description:
      "A social media marketer is the heartbeat of our digital presence the one who turns moments into stories, and stories into conversations. At SmartLens, our marketer is not just posting content; they’re shaping how the world sees us. Every caption, reel, and hashtag is crafted with intent — to connect, engage, and inspire.",
    image: "/images/crew/gathoni.jpg",
  },
  {
    name: "Ismael Mungai",
    role: "Transport and Logistics",
    description:
      "Behind every smooth shoot is someone who ensures that everything  and everyone gets where it needs to be, safely and on time. Our Safety and Transport Lead is the quiet force that keeps SmartLens moving from early morning call times to late night returns.",
    image: "/images/crew/Mungai.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartLens Photography</title>
        <meta name="description" content="Capturing moments that matter" />
      </Head>

      <main className="bg-gray-900 text-white min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-16 px-6 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to SmartLens Photography
          </h1>
          <p className="text-gray-300 max-w-2xl mb-6 text-sm md:text-base">
            We capture your best moments and bring your story to life through stunning visuals and professional livestreams.
          </p>
          <a
            href="/portfolio"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            Explore
          </a>
        </section>

        {/* Crew Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Meet Our Crew
          </h2>

          <div className="flex flex-col gap-16">
            {crew.map((member, index) => (
              <motion.div
                key={member.name}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-64 md:h-96"
                />
                <div className="w-full md:w-1/2 bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-red-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

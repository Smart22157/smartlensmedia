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
    role: "Photographer",
    description:
      "Sometimes the grandest shots are in tiny details. Macro shots of water droplets, leaves, or textures tell stories of the natural world. In video, slow reveals focusing on a dewdrop before pulling back to a vast landscape create cinematic tension. Learning to notice small details trains your eye for bigger compositions.",
    image: "/images/crew/smart.jpg",
  },
  {
    name: "Samuel Njuki",
    role: "Videographer",
    description:
      "In photography, a slight motion blur can convey movement; in video, motion is your language. Experiment with slow-motion to emphasize emotion, hyperlapse to show time passing, or panning shots to lead the eye through a scene. Even a simple hand movement or falling leaf can feel cinematic when captured thoughtfully.",
    image: "/images/crew/sam.jpg",
  },
  {
    name: "James Njuki",
    role: "Videographer",
    description:
      "A still photo freezes emotion, but video lets it breathe. A laugh, a tear, a handshake, or a fleeting glance—these tiny human moments become cinematic gold. Focus on reactions rather than poses. The subtle lift of an eyebrow or the sway of a dress in the wind can tell a story more powerful than words. Aim for authenticity in both stills and moving shots.",
    image: "/images/crew/james.jpg",
  },
  {
    name: "Cynthia Nyokabi",
    role: "Designer",
    description:
      "Every great design tells a story. Whether it’s a logo, website, or product, think about what narrative it carries. Why does it exist? Who is it for? What feeling should it evoke? Story-driven design resonates with people because it connects on an emotional level, not just a visual one.",
    image: "/images/crew/cynthia.jpg",
  },
   {
    name: "Virginia Gathoni",
    role: "Social Media Marketer",
    description:
      "Every great design tells a story. Whether it’s a logo, website, or product, think about what narrative it carries. Why does it exist? Who is it for? What feeling should it evoke? Story-driven design resonates with people because it connects on an emotional level, not just a visual one.",
    image: "/images/crew/gathoni.jpg",
  },
   {
    name: "Ismael Mungai",
    role: " Transport and Logistics",
    description:
"Logistics is all about movement trucks leaving depots, conveyor belts in warehouses, or forklifts in action. Use motion blur to show speed and activity in photos, or in video, use tracking shots to follow packages and vehicles. Showing flow emphasizes the system at work.",
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
        <section className="flex flex-col items-center justify-center py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SmartLens Photography</h1>
          <p className="text-gray-300 max-w-xl mb-6">
            We capture your best moments and bring your story to life through stunning visuals and professional livestreams.
          </p>
          <a
            href="/portfolio"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition"
          >
            Explore
          </a>
        </section>

        {/* Crew Section – BELOW the Explore button */}
        <section className="py-24 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Crew</h2>

          <div className="flex flex-col gap-12">
            {crew.map((member, index) => (
              <motion.div
                key={member.name}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } transition-transform duration-500 hover:scale-105`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full md:w-1/2 rounded shadow-lg object-cover max-h-96 transition-transform duration-500 hover:scale-105"
                />

                {/* Text Box */}
                <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded shadow-lg transition-transform duration-500 hover:scale-105">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

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
      "Capturing tiny details and turning them into cinematic stories.",
    image: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536080/smart_svzomb.jpg",
  },
  {
    name: "Samuel Njuki",
    role: "Videographer, Photographer",
    description:
      "Slow motion, panning, and hyperlapse – making moments speak.",
    image: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536079/sam_x5d5zm.jpg",
  },
  {
    name: "James Njuki",
    role: "Videographer",
    description:
      "Turning fleeting human moments into cinematic gold.",
    image: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536082/james_p0czcj.jpg",
  },
  {
    name: "Virginia Gathoni",
    role: "Social Media Marketer",
    description:
      "Our social media marketer turns moments into stories, and stories into conversations, shaping how the world sees us.",
    image: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536082/gathoni_dauihc.jpg",
  },
];

const portfolioPreview = [
  "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767535782/grad15_crixds.jpg",
  "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad1_dj8vue.jpg",
  "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767535786/p4_keiaca.jpg",
  "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767535765/corporate12_u9di3r.jpg",
  "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate2_lunshf.jpg",
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
        <section className="flex flex-col items-center justify-center text-center py-12 md:py-20 px-6">
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
            Explore Portfolio
          </a>
        </section>

       
{/* Services / Categories Bar */}
<section className="py-8 md:py-12 px-6 md:px-12 max-w-6xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
    Our Services
  </h2>
  <div className="flex flex-wrap justify-center gap-4">
    {[
      { name: "Weddings", icon: "💍" },
      { name: "Portraits", icon: "📸" },
      { name: "Corporate", icon: "🏢" },
      { name: "Drone", icon: "🚁" },
      { name: "Graduations", icon: "🎓" },
      { name: "Ordinations", icon: "⛪" },
    ].map((service, idx) => (
      <div
        key={idx}
        className="bg-gray-800 hover:bg-red-600 transition-colors rounded-lg px-6 py-4 flex flex-col items-center cursor-pointer shadow-lg w-32 text-center"
      >
        <span className="text-3xl mb-2">{service.icon}</span>
        <span className="font-semibold text-sm">{service.name}</span>
      </div>
    ))}
  </div>
</section>


        {/* Crew Section */}
        <section className="py-12 md:py-16 px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Meet Our Crew
          </h2>
          <div className="flex flex-col gap-12">
            {crew.map((member, index) => (
              <motion.div
                key={member.name}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-6 md:gap-8`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-64 md:h-80"
                />
                <div className="w-full md:w-1/2 bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-500 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
    {/* Mini Portfolio Preview */}
        <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {portfolioPreview.map((src, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-32 md:h-40 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>
        {/* Streams Section */}
        <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Livestream Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "CHRM COLLEGE - Oct 2025", url: "https://www.youtube.com/embed/TgrNub3kYaI" },
              { title: "JKUAT Graduation - Jun 2025", url: "https://www.youtube.com/embed/tS2S0FmqVUc" },
              { title: "Burial Livestream - Oct 2025", url: "https://www.youtube.com/embed/Ojd-UebXDNs" },
            ].map((stream, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <iframe
                  src={stream.url}
                  title={stream.title}
                  className="w-full h-48 sm:h-56 md:h-64"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="p-2 text-sm text-gray-300 font-semibold">{stream.title}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SmartLens Photography. All rights reserved.
        </footer>
      </main>
    </>
  );
}

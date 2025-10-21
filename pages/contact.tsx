import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact SmartLens</title>
        <meta name="description" content="Contact SmartLens Photography crew" />
      </Head>

      {/* Navbar OUTSIDE main */}
      <Navbar />

      <main className="bg-gray-900 text-white min-h-screen px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        {/* Whole Crew Photo */}
        <div className="max-w-4xl mx-auto mb-16">
          <img
            src="/images/crew/whole-crew.jpg"
            alt="SmartLens Crew"
            className="w-full rounded shadow-lg object-cover"
          />
        </div>

        {/* Contact Info Section */}
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded shadow-lg flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

          <p className="text-gray-300">
            Email: <a href="mailto:smartlens22157@gmail.com" className="text-red-600 hover:underline">smartlens22157@gmail.com</a>
          </p>
          <p className="text-gray-300">
            Phone: <a href="tel:+254116882878" className="text-red-600 hover:underline">+254 116 882 878</a>
          </p>

          <div className="flex space-x-6 mt-4">
            <a href="https://www.instagram.com/smart_lens.ke?igsh=eHd0eXNjeWJscTdz" target="_blank" rel="noopener noreferrer">
              <img src="images/icons/instagram.jpg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@smart_lens.ke" target="_blank" rel="noopener noreferrer">
              <img src="images/icons/tiktok.png" alt="TikTok" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>

          <a
            href="/booking"
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded transition"
          >
            Book Now
          </a>
        </div>
      </main>
    </>
  );
}

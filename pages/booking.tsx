import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import emailjs from "@emailjs/browser";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use EmailJS to send email
    emailjs
      .send(
        "service_9pc54si",
        "template_0s372ov",
        formData,
        "PHcchW7NMPRWxQlXR"
      )
      .then(
        () => setStatus("Booking request sent successfully!"),
        (err) => setStatus("Failed to send. Please try again.")
      );
  };

  return (
    <>
      <Head>
        <title>Book Now - SmartLens</title>
        <meta name="description" content="Book SmartLens Photography services" />
      </Head>

      <main className="bg-gray-900 text-white min-h-screen px-4 py-12">
        <Navbar />

        <section className="max-w-2xl mx-auto bg-gray-800 p-8 rounded shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Book Now</h1>
          <p className="text-gray-300 mb-6 text-center">
            Fill in your details and we will get back to you!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600"
            />

            <textarea
              name="job"
              placeholder="Job Description / Notes"
              value={formData.job}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded bg-gray-700 text-white border border-gray-600"
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mt-4 transition"
            >
              Send Booking Request
            </button>
          </form>

          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </section>
      </main>
    </>
  );
}

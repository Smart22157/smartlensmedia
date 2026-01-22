import { useState } from "react";
import emailjs from "@emailjs/browser";

const Studio = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending booking...");


    emailjs
      .send(
        "service_5g2g4mz",       // your EmailJS service ID
        "template_k8oclif",       // template for client confirmation
        form,
        "cQhu9y48ipOAVeKnD"     // your public key
      )
      .then(() => {
        console.log("Confirmation sent to client");
      })
      .catch((err) => console.error("Client email error:", err));

    emailjs
      .send(
        "service_5g2g4mz",       // same service ID
        "template_gdohd59",        // template for owner notification
        form,
        "cQhu9y48ipOAVeKnD"
      )
      .then(() => {
        console.log("Booking sent to owner");
        setStatus("Booking updated.");
      })
      .catch((err) => {
        console.error("Owner email error:", err);
        setStatus("Booking sent to client, but failed to notify owner.");
      });

    // Reset form
    setForm({ name: "", email: "", phone: "", date: "", time: "" });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">SmartLens Studio</h1>
        <p className="text-center text-gray-400 mb-12">
          Our professional studio is launching soon. You can now pre-book sessions!
        </p>

        {/* Coming Soon Banner */}
        <div className="bg-red-600 text-white text-center py-3 rounded mb-12">
          🚧 Studio Coming Soon – Now Accepting Bookings 🚧
        </div>

        {/* Gallery Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-gray-800 h-40 rounded flex items-center justify-center text-gray-500">
              Studio Photo {i}
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Book a Studio Session</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
            <div className="flex gap-4">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold"
            >
              Submit Booking
            </button>
          </form>

          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Studio;

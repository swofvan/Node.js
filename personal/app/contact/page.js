"use client";

import Nav from "../components/navbar";
import Footer from "../components/footer";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {

    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Nav />

      {/* Heading */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-purple-700" data-aos="fade-up" data-aos-delay="100">Contact Me</h1>
        <p className="mt-4 text-gray-300" data-aos="fade-up" data-aos-delay="200">
          Feel free to reach out for collaborations or any queries.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16">
        
        {/* Left - Contact Details */}
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg space-y-6 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-purple-700" data-aos="fade-up" data-aos-delay="200">Get in Touch</h2>

          <p className="flex items-center gap-3 text-gray-300" data-aos="fade-up" data-aos-delay="300">
            <FaEnvelope /> swofvanmhd@gmail.com
          </p>

          <p className="flex items-center gap-3 text-gray-300" data-aos="fade-up" data-aos-delay="400">
            <FaPhone /> +91 8594 040 472
          </p>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl pt-4" data-aos="fade-up" data-aos-delay="500">
            <a href="https://www.linkedin.com/" target="_blank" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://wa.me/918594040472" target="_blank" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right - Simple Form */}
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6" data-aos="fade-up" data-aos-delay="200">Send a Message</h2>

          <form className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-neutral-800 border border-gray-700 focus:outline-none focus:border-purple-700"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-neutral-800 border border-gray-700 focus:outline-none focus:border-purple-700"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-neutral-800 border border-gray-700 focus:outline-none focus:border-purple-700"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 py-3 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </div>
  );
}
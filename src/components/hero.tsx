"use client";
import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  const avatars = [
    "/amlan.jpeg",
    "/ajayramani.jpg",
    "/diksha.jpeg",
    "/prof-k.jpeg",
    "/saumya.jpeg",
    "/Mohdrawidean.jpg",
  ];

  return (
    <section
      className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-neutral-900 py-12 md:py-24 lg:py-32"
      id="hero"
    >
      <BackgroundBeams />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-pulse-slow absolute -top-32 left-1/2 h-[60vh] w-[120vw] -translate-x-1/2 bg-gradient-to-tr from-blue-700/30 via-purple-500/20 to-pink-400/20 opacity-70 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex h-[80vh] flex-col items-center justify-center space-y-8 rounded-3xl bg-black/30 p-8 text-center shadow-xl backdrop-blur-md"
        >
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              R10 IEEE Computer Society Summer School 2025
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium text-gray-300 md:text-xl">
              <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-base font-semibold text-blue-200 shadow-sm">
                Learn. Build. Connect.
              </span>
              <br />
              An intensive learning experience designed to enhance your
              technical skills and knowledge!
            </p>
          </div>

          <div className="z-[999] flex flex-col justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/register"
                className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:from-blue-800 hover:to-pink-600"
              >
                Register
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#schedule"
                className="border-gray-300 bg-white/90 px-8 py-3 text-base font-semibold text-black shadow hover:bg-gray-50"
              >
                View Schedule
              </Link>
            </motion.div>
          </div>

          <div className="space-y-4 pt-8">
            <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 px-4 py-1 text-lg font-bold text-white shadow-md">
              28th July - 1st August 2025
            </span>

            {/* Avatars */}
            <div className="flex items-center justify-center space-x-2">
              {avatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                >
                  <Image
                    src={avatar || "/avatar.jpeg"}
                    alt={`User ${index + 1}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-white shadow-md"
                  />
                </motion.div>
              ))}
            </div>

            {/* Company Logos */}
            <div className="flex items-center justify-center space-x-8 pt-6 opacity-80">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-black"></div>
                <span className="text-sm font-medium text-gray-200">IEEE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-blue-200">
                  IEEE BVICAM
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  src="/cschatper2.png"
                  alt="CS Chapter Logo"
                  className="h-15 w-15 object-contain"
                />{" "}
                <span className="text-sm font-medium text-blue-200">
                  IEEE BVICAM CS Chapter
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-purple-600"></div>
                <span className="text-sm font-medium text-purple-200">
                  BVICAM
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  const avatars = [
    "/avatar.jpeg",
    "/avatar.jpeg",
    "/avatar.jpeg",
    "/avatar.jpeg",
    "/avatar.jpeg",
    "/avatar.jpeg",
    "/avatar.jpeg",
    "/avatar.jpeg",
  ];

  return (
    <section
      className="relative min-h-[calc(100vh-100px)] py-12 md:py-24 lg:py-32 bg-neutral-900 overflow-hidden"
      id="hero">
      <BackgroundBeams />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-blue-700/30 via-purple-500/20 to-pink-400/20 blur-3xl opacity-70 animate-pulse-slow" />
      </div>
      <div className="relative z-10 max-w-7xl px-4 sm:px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-8 text-center shadow-xl rounded-3xl h-[80vh] bg-black/30 backdrop-blur-md p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              R10 IEEE Computer Society Summer School 2025
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl font-medium">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-blue-200 font-semibold text-base mb-2 shadow-sm">
                Learn. Build. Connect.
              </span>
              <br />
              An intensive learning experience designed to enhance your
              technical skills and knowledge!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center z-[999]">
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/register"
                className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white hover:from-blue-800 hover:to-pink-600 px-8 py-3 text-base font-semibold shadow-lg">
                Register
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#schedule"
                className="bg-white/90 text-black border-gray-300 hover:bg-gray-50 px-8 py-3 text-base font-semibold shadow">
                View Schedule
              </Link>
            </motion.div>
          </div>

          <div className="space-y-4 pt-8">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white font-bold text-lg shadow-md">
              28th July - 1st August 2025
            </span>

            {/* Avatars */}
            <div className="flex justify-center items-center space-x-2">
              {avatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}>
                  <Image
                    src={avatar || "/avatar.jpeg"}
                    alt={`User ${index + 1}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                </motion.div>
              ))}
            </div>

            {/* Company Logos */}
            <div className="flex justify-center items-center space-x-8 pt-6 opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-black rounded"></div>
                <span className="text-sm font-medium text-gray-200">IEEE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-200">
                  IEEE BVICAM
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                <span className="text-sm font-medium text-cyan-200">
                  IEEE BVICAM CS Chapter
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
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

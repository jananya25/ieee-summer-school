"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="flex justify-between items-center text-white overflow-hidden">
        <div className="relative z-10 w-full p-4  bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white rounded-t-lg shadow-lg">
          <div className="mx-auto flex flex-col justify-between items-start">
            <div className="flex justify-center items-center w-full">
              <p className="mt-4 text-4xl md:text-5xl font-bold text-gray-400 leading-relaxed text-center">
                {" "}
               Summer School BVICAM
              </p>
            </div>
            <div className="flex flex-col justify-between items-start gap-4 w-full md:w-1/2 mx-auto">
              <ul className="flex justify-between gap-2 w-full">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-gray-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#schedule"
                    className="text-gray-400 hover:text-gray-200">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    href="#speakers"
                    className="text-gray-400 hover:text-gray-200">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="text-gray-400 hover:text-gray-200">
                    Register Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bharati Vidyapeeth&apos;s Institute of Computer Applications and Management */}
            <div className="w-full text-gray-400  py-2">
              <p className="text-center">
                BVICAM, A-4, Paschim Vihar, Opp. Paschim Vihar (East) Metro
                Station, Rohtak Road, New Delhi, Delhi 110063
              </p>
            </div>

            <div className="flex flex-col  justify-between items-center w-full py-4 text-gray-400 ">

                <p>
                  &copy; {new Date().getFullYear()} BVICAM. All Rights Reserved.
                </p>
                <p className="text-gray-400">
                  Designed and Developed by{" "}
                  <a
                    href="https://amrendram.me"
                    className="text-gray-400 hover:text-gray-300 underline">
                    Ananya Jain and Kumar Amrendram 
                  </a>
                </p>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
            <p className="font-medium text-2xl">Contact Us:</p>
            <p className="font-medium text-base">
              Nidhi Gupta: +91-9211506201 | Ananya Jain: +91-8586078543 | Kumar
              Amrendram : +91-9625854106
            </p>
          </div>
        </div>
    </section>
  );
};

export default Footer;

"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import Bar from "@/components/ui/bar";

const Speakers = () => {
  const cards = [
    {
      title: "Mohamed. Rawidean Mohd. Kassim",
      src: "/Mohdrawidean.jpg",
      designation: "R&D Manager, MIMOS Berhad, Malaysia"
    },
    {
      title: "Prof. Dr. K. Subramanian",
      src: "/prof-k.jpeg",
      designation: "Founding director at Advanced Centre for Informatics and Innovative Learning, IGNOU"
    },
    {
      title: "Prof. Amlan Chakrabarti",
      src: "/amlan.jpeg",
      designation: "Professor at A.K. Choudhary School of Information and Technology, University of Calcutta"
    },
    {
      title: "Mr. Ajay Ramani",
      src: "/ajayramani.jpg",
      designation: "Software Engineer, Lyxel & Flamingo"
    },
    {
      title: "Ms. Saumya Aggarwal",
      src: "/saumya.jpeg",
      designation: "Associate Data Analyst, Professor, Aiprus Software Pvt. Lmt"
    },
    {
      title: "Ms. Diksha Jain",
      src: "/diksha.jpeg",
      designation: "Assistant Professor, Indraprastha College for Women, Delhi"
    },
  ];

  


  return (
    <section className="flex flex-col p-4 md:px-16 py-20" id="speakers">
      <div className="py-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center py-2 bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-blue-800">
        Speakers
        </h1>
        <Bar classname="mx-auto" />
      </div>
      <FocusCards cards={cards} />;

      {/* <p className="text-xl text-center text-gray-600">
        Get ready to be inspired by world-renowned experts in the field of
        engineering and technology.
      </p>

      <p className="text-5xl font-semibold text-blue-600 animate-pulse text-center py-6 mb-6">
        Coming Soon
      </p> */}

      {/* Focus Cards Displaying Speakers */}
      {/* <div className="max-w-6xl mx-auto px-4">
        <FocusCards cards={focusCardsData} />
      </div> */}

    
    </section>
  );
};

export default Speakers;

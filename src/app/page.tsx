import HeroSection from "@/components/hero";
import RegistrationGuidelines from "@/components/registration-guidelines";
import { About } from "@/components/about";
import { Schedule } from "@/components/schedule";
import { Speaker } from "lucide-react";
import Speakers from "@/components/Speakers";
import VenuePage from "@/components/Venue";
import FAQ from "@/components/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection/>

      <About />

      <section id="gallery" className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Placeholder images */}
          <div className="bg-accent aspect-square rounded-lg hoverable"></div>
          <div className="bg-accent aspect-square rounded-lg hoverable"></div>
          <div className="bg-accent aspect-square rounded-lg hoverable"></div>
          <div className="bg-accent aspect-square rounded-lg hoverable"></div>
        </div>
      </section>

      {/* <section id="speakers" className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Speakers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow hoverable p-6 text-center">
            Speaker 1
          </div>
          <div className="bg-white rounded-lg shadow hoverable p-6 text-center">
            Speaker 2
          </div>
          <div className="bg-white rounded-lg shadow hoverable p-6 text-center">
            Speaker 3
          </div>
        </div>
      </section> */}
      <Speakers/>

      {/* <section id="guidelines" className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Guidelines</h2>
        <ul className="list-disc pl-6 text-foreground/80">
          <li>Follow the event code of conduct.</li>
          <li>Respect all participants and speakers.</li>
          <li>Participate actively in sessions and workshops.</li>
        </ul>
      </section> */}
      <RegistrationGuidelines/>

        <Schedule/>

      {/* <section id="faq" className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow hoverable p-4">
            Q: Who can attend? <br />
            A: Students and professionals from all backgrounds.
          </div>
          <div className="bg-white rounded-lg shadow hoverable p-4">
            Q: Is there a registration fee? <br />
            A: Details will be announced soon.
          </div>
        </div>
      </section> */}
      <FAQ/>

      {/* <section id="venue" className="py-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Venue</h2>
        <div className="bg-white rounded-lg shadow hoverable p-6">
          BVICAM, New Delhi
        </div>
      </section> */}
      <VenuePage/>

      <footer className="py-8 text-center text-foreground/60 text-sm">
        &copy; {new Date().getFullYear()} R10 IEEE Computer Society Summer School 2025. All rights
        reserved.
      </footer>
    </>
  );
}

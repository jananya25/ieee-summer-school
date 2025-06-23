import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BackgroundBeams } from "./background-beams"

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
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-700 max-w-4xl">
              IEEE Summer School  2025
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
              An intensive learning experience designed to enhance your technical skills and knowledge!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base font-medium">
              Register
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-50 px-8 py-3 text-base font-medium"
            >
                View Schedule
            </Button>
          </div>

          {/* Social Proof */}
          <div className="space-y-4 pt-8">
            <p className="text-sm text-gray-500 font-medium">
              COMING SOON..
            </p>

            {/* Avatars */}
            <div className="flex justify-center items-center space-x-2">
              {avatars.map((avatar, index) => (
                <div key={index} className="relative">
                  <Image
                    src={avatar || "/avatar.jpeg"}
                    alt={`User ${index + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white shadow-sm"
                  />
                </div>
              ))}
            </div>

            {/* Company Logos */}
            <div className="flex justify-center items-center space-x-8 pt-6 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-black rounded"></div>
                <span className="text-sm font-medium text-gray-700">IEEE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">IEEE BVICAM</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                <span className="text-sm font-medium text-gray-700">IEEE BVICAM CS Chapter</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
                <span className="text-sm font-medium text-gray-700">BVICAM</span>
              </div>
            </div>
          </div>

          {/* Bottom Section
          <div className="pt-12 w-full max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Idea to website in minutes, <span className="text-purple-600">not hours.</span>
                </h2>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">localhost:3000</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <div className="h-8 bg-blue-500 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <BackgroundBeams/>
      </div>
    </section>
  )
}

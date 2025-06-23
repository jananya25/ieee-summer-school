import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
// If shadcn/ui or aceternity ui components are available, import them here
// import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Summer School 2025 - IEEE BVICAM",
  description: "Summer School 2025 - IEEE BVICAM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <header className="w-full border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
          <nav className="container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <img
                src="/file.svg"
                alt="IEEE Summer School"
                className="h-8 w-8"
              />
              <span className="font-bold text-lg text-primary">
                IEEE Summer School
              </span>
            </div>
            <ul className="flex gap-6 text-sm font-medium text-foreground">
              <li>
                <a
                  href="#hero"
                  className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="hover:text-primary transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#guidelines"
                  className="hover:text-primary transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  className="hover:text-primary transition-colors">
                  Venue
                </a>
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href="/login"
                className="hoverable px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                Login
              </a>
              <a
                href="/register"
                className="hoverable px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors">
                Register
              </a>
            </div>
          </nav>
        </header>
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}

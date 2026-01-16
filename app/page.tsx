// app/page.tsx
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import DSAStats from "./components/DSAStats";
import Skills from "./components/Skills";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="bg-[#050505] pt-20">
        <Hero />
        <Skills/>
        <BentoGrid />
        <DSAStats />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
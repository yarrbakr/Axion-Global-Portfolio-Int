import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

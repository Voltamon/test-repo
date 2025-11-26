import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import Team from "@/components/sections/Team";
import Partnerships from "@/components/sections/Partnerships";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Values />
      <Team />
      <Partnerships />
      <Contact />
    </div>
  );
}

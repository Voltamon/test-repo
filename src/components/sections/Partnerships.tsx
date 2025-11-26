"use client";
import { Marquee } from "../ui/Marquee";

const partners = ["TechCorp", "InnovateLabs", "FutureSystems", "CloudNine", "DataFlow", "AlphaWave", "NextGen"];

export default function Partnerships() {
    return (
        <section id="partners" className="bg-black text-white py-32 border-t border-white/10">
            <div className="container mx-auto px-6 mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Trusted Partnerships</h2>
            </div>

            <Marquee className="py-10 border-y border-white/5 bg-white/5">
                {partners.map((partner) => (
                    <div key={partner} className="text-3xl font-bold text-gray-500 whitespace-nowrap">
                        {partner}
                    </div>
                ))}
            </Marquee>
        </section>
    );
}

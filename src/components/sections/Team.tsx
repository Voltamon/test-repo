"use client";
import { AnimatedList } from "../ui/AnimatedList";
import { ScrollReveal } from "../ui/ScrollReveal";

const team = [
    { name: "Roland", role: "Founder" },
    { name: "Joseph G", role: "CTO" },
    { name: "Kian", role: "Lead Developer" },
    { name: "Ishan SR", role: "Product Manager" },
];

export default function Team() {
    return (
        <section id="team" className="bg-black text-white py-32">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20 text-center">Meet the Pillars</h2>
                </ScrollReveal>

                <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 p-6 hover:border-white/30 transition-colors">
                            <div className="aspect-square bg-zinc-800 rounded-xl mb-6 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </AnimatedList>
            </div>
        </section>
    );
}

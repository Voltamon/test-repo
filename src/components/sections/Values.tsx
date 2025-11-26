"use client";
import { ScrollStack } from "../ui/ScrollStack";

const values = [
    {
        title: "Agility",
        description: "We adapt quickly to changing market conditions and client needs, ensuring rapid delivery and continuous improvement."
    },
    {
        title: "Trustworthiness",
        description: "We build lasting relationships based on transparency, integrity, and a commitment to delivering on our promises."
    },
    {
        title: "Entrepreneurship",
        description: "We foster a culture of innovation and ownership, empowering our teams to think like founders and drive growth."
    }
];

export default function Values() {
    return (
        <section id="values" className="bg-black text-white py-20">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Core Values</h2>
            </div>
            <ScrollStack items={values} />
        </section>
    );
}

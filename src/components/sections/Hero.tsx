"use client";
import { Particles } from "../ui/Particles";
import { TypeText } from "../ui/TypeText";
import { ClickSpark } from "../ui/ClickSpark";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            <Particles className="absolute inset-0 z-0" />
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-[120px] md:min-h-[160px] flex items-center justify-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        <TypeText text="Your Success is Our Success" delay={500} />
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
                >
                    Strategic alignment across diverse business models. Empowering startups through collaboration.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                >
                    <ClickSpark>
                        <button className="px-8 py-4 text-lg font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all transform hover:scale-105">
                            Discover Our Venture Studio
                        </button>
                    </ClickSpark>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}

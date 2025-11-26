"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CardProps {
    title: string;
    description: string;
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card = ({ title, description, index, progress, range, targetScale }: CardProps) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-10% + ${index * 25}px)` }}
                className="relative flex flex-col items-center justify-center w-[90vw] md:w-[70vw] h-[60vh] rounded-3xl bg-zinc-900 border border-white/10 p-10 origin-top shadow-2xl"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">{title}</h2>
                <p className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl">{description}</p>
            </motion.div>
        </div>
    );
};

export const ScrollStack = ({ items }: { items: { title: string, description: string }[] }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="relative">
            {items.map((item, i) => {
                const targetScale = 1 - ((items.length - i) * 0.05);
                return (
                    <Card
                        key={i}
                        {...item}
                        index={i}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
};

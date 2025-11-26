"use client";
import { motion, useInView } from "framer-motion";
import { useRef, Children } from "react";

export const AnimatedList = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={className}>
            {Children.map(children, (child, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: delay + i * 0.1, duration: 0.5 }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
};

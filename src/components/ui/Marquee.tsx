"use client";
import { motion } from "framer-motion";

export const Marquee = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`overflow-hidden flex ${className}`}>
            <motion.div
                className="flex flex-shrink-0 gap-20 pr-20"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {children}
            </motion.div>
            <motion.div
                className="flex flex-shrink-0 gap-20 pr-20"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {children}
            </motion.div>
        </div>
    );
};

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const TrueFocus = ({
    type = "text",
    placeholder,
    className
}: {
    type?: string,
    placeholder?: string,
    className?: string
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative group">
            <motion.div
                animate={isFocused ? { opacity: 1, scale: 1.02 } : { opacity: 0, scale: 1 }}
                className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md pointer-events-none"
            />
            <input
                type={type}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`relative w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${className}`}
            />
        </div>
    );
};

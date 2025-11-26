"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spark {
    id: number;
    x: number;
    y: number;
    angle: number;
    color: string;
}

export const ClickSpark = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const [sparks, setSparks] = useState<Spark[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newSparks = Array.from({ length: 12 }).map((_, i) => ({
            id: Date.now() + i,
            x,
            y,
            angle: (i * 360) / 12,
            color: ['#3b82f6', '#8b5cf6', '#ffffff'][Math.floor(Math.random() * 3)]
        }));

        setSparks(prev => [...prev, ...newSparks]);

        setTimeout(() => {
            setSparks(prev => prev.slice(12));
        }, 600);
    };

    return (
        <div className={`relative inline-block ${className}`} onClick={handleClick}>
            {children}
            <AnimatePresence>
                {sparks.map(spark => (
                    <motion.div
                        key={spark.id}
                        initial={{ x: spark.x, y: spark.y, opacity: 1, scale: 1 }}
                        animate={{
                            x: spark.x + Math.cos(spark.angle * Math.PI / 180) * 60,
                            y: spark.y + Math.sin(spark.angle * Math.PI / 180) * 60,
                            opacity: 0,
                            scale: 0
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ backgroundColor: spark.color }}
                        className="absolute w-1 h-1 rounded-full pointer-events-none z-50"
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

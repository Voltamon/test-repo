"use client";
import { useEffect, useState } from "react";

export const TypeText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [text, started]);

    return <span className={className}>{displayedText}</span>;
};

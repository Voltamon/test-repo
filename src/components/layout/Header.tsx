"use client";
import Link from 'next/link';
import { ClickSpark } from '../ui/ClickSpark';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="text-2xl font-bold tracking-tighter text-white">
                Beschi SSC
            </div>
            <nav className="hidden md:flex items-center gap-8">
                {['Values', 'Team', 'Partners', 'Contact'].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {item}
                    </Link>
                ))}
            </nav>
            <ClickSpark className="cursor-pointer">
                <button className="px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
                    Get Started
                </button>
            </ClickSpark>
        </header>
    );
}

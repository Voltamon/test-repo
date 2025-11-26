"use client";
import { TrueFocus } from "../ui/TrueFocus";
import { ClickSpark } from "../ui/ClickSpark";

export default function Contact() {
    return (
        <section id="contact" className="bg-black text-white py-32">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">Get in Touch</h2>
                <p className="text-gray-400 mb-12">
                    Ready to start your journey? Contact us today.
                </p>

                <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <TrueFocus placeholder="Name" />
                    <TrueFocus type="email" placeholder="Email" />
                    <div className="relative group">
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                    </div>
                    <ClickSpark className="w-full block">
                        <button className="w-full py-4 text-lg font-bold text-black bg-white rounded-lg hover:bg-gray-200 transition-colors">
                            Send Message
                        </button>
                    </ClickSpark>
                </form>
            </div>
        </section>
    );
}

export default function Footer() {
    return (
        <footer className="py-20 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter mb-4">Beschi SSC</h2>
                        <p className="text-gray-400 max-w-sm">
                            Empowering startups through collaboration, agility, and trustworthiness.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Social</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Beschi SSC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

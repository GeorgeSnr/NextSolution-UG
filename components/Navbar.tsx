// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Flag } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    // Track scroll position + active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = ['how', 'investors', 'faq', 'for-investors']
            let current = ''

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section
                        break
                    }
                }
            }

            setActiveSection(current)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'How it Works', href: '#how' },
        { label: 'Investors', href: '#investors' },
        { label: 'FAQ', href: '#faq' },
    ]

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const id = href.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(id)
            if (mobileOpen) setMobileOpen(false)
        }
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Flag className="w-8 h-8 text-yellow-500" />
                    <span className="text-2xl font-bold text-white">NextSolution UG</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`transition-all duration-300 font-medium ${activeSection === link.href.replace('#', '')
                                ? 'text-yellow-500 font-bold'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Apply Button */}
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSexCkhaLbC0Iu5MQi60a9U5vncIgc7eA7K2ghTqh-fILIcWOA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition shadow-lg"
                    >
                        Apply Now
                    </a>

                    {/* Invest Button */}
                    <a
                        href="#for-investors"
                        onClick={(e) => scrollToSection(e, '#for-investors')}
                        className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${activeSection === 'for-investors'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                    >
                        Invest in Uganda’s Future
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-slate-950/98 border-t border-white/10">
                    <div className="px-6 py-8 space-y-6 text-center">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`block text-xl transition-all ${activeSection === link.href.replace('#', '')
                                    ? 'text-yellow-500 font-bold'
                                    : 'text-gray-300'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSexCkhaLbC0Iu5MQi60a9U5vncIgc7eA7K2ghTqh-fILIcWOA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-yellow-500 text-black py-4 rounded-full font-bold text-lg"
                        >
                            Apply Now — Free MVP
                        </a>

                        <a
                            href="#for-investors"
                            onClick={(e) => scrollToSection(e, '#for-investors')}
                            className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${activeSection === 'for-investors'
                                ? 'bg-white/10 text-white border border-white/20'
                                : 'bg-yellow-500 text-black hover:bg-yellow-400'
                                }`}
                        >
                            Invest in Uganda’s Future
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
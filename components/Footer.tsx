// components/Footer.tsx
'use client'

import { Flag, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1: Brand + Mission */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <Flag className="w-10 h-10 text-yellow-500" />
            <span className="text-3xl font-black text-white">NextSolution UG</span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Building Uganda’s next generation of tech founders — <br />
            <span className="text-yellow-500 font-bold">one free MVP at a time</span>.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://twitter.com/nextsolutionug" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/nextsolutionug" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/nextsolutionug" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#how" className="hover:text-yellow-500 transition">How It Works</a></li>
            <li><a href="#investors" className="hover:text-yellow-500 transition">Our Investors & Sponsors</a></li>
            <li><a href="#for-investors" className="hover:text-yellow-500 transition">Invest in Uganda</a></li>
            <li><a href="#faq" className="hover:text-yellow-500 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Location */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
          <ul className="space-y-5 text-gray-400">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-yellow-500" />
              <span>simufix@gmail.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>+256 703275790 (WhatsApp)</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>Kampala, Uganda</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Globe className="w-5 h-5 text-yellow-500" />
              <span>nextsolution.ug</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Final CTA + Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-300 text-lg mb-6">
            Ready to launch your startup <span className="text-yellow-500 font-bold">in 2026</span>?
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexCkhaLbC0Iu5MQi60a9U5vncIgc7eA7K2ghTqh-fILIcWOA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-yellow-500 text-black font-bold text-lg px-4 py-1 rounded-full hover:bg-yellow-400 transition-all shadow-xl hover:shadow-yellow-500/30"
          >
            Apply Now – Free MVP
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition" />
          </a>

          <div className="mt-12 text-gray-500 text-sm">
            <p>Made with love in Uganda</p>
            <p className="mt-2">© 2025 NextSolution UG. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Final bottom bar */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>
          Backed by <span className="text-yellow-500">MTN • Mastercard Foundation • Stanbic Bank • ABSA Bank • GrowthAfrica • JICA</span>
        </p>
      </div>
    </footer>
  )
}
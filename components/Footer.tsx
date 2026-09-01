'use client';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  'About Club': [
    { label: 'Current Leaders', href: '/current-leaders' },
    { label: 'Past Leaders', href: '/past-leaders' },
    { label: 'Awards', href: '/awards' },
    { label: 'Journey to Excellence', href: '/journey' },
    { label: 'Club Logo', href: '/club-logo' },
  ],
  'About Leos': [
    { label: 'Leoism', href: '/leoism' },
    { label: 'Lions International', href: '/lions' },
    { label: 'Leo District 306 D2', href: '/district' },
    { label: 'Multiple District 306', href: '/multiple-district' },
  ],
  'Resources': [
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Club Directory', href: '/directory' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white">
      {/* CTA Band */}
      <div className="bg-linear-to-r from-[#0033A0] to-[#001f6b] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-display">
              Let&apos;s make a difference in the lives of others
            </h2>
            <p className="text-white/70 mt-1">Join us as a volunteer or donate to support our cause.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#donate"
              className="bg-[#FFD700] text-[#0033A0] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Donate
            </Link>
            <Link
              href="/current-leaders"
              className="border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[#0033A0] font-black text-base">LC</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">Leo Club</div>
              <div className="text-[#FFD700] text-sm font-medium">of Sample City</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A non-profit youth organization dedicated to community service, leadership development, and humanitarian efforts across Sample City and beyond. We grow through service.
          </p>
          {/* Contact */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-white/60">
              <MapPin className="w-4 h-4 mt-0.5 text-[#FFD700] shrink-0" />
              <span>Leo Club of Sample City, 123 Unity Avenue,<br />Sample City, Sri Lanka 10000</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <Phone className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>+94 77 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>info@leoclubsamplecity.org</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[
              { icon: Facebook, href: '#', label: 'Facebook' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Youtube, href: '#', label: 'YouTube' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#FFD700] hover:text-[#FFD700] hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {category}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#FFD700] transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Leo Club of Sample City. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

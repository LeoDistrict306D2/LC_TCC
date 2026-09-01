'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import CounterCard from '@/components/CounterCard';
import {
  Heart, Droplets, Stethoscope, BookOpen, Building2,
  Users, Baby, UsersRound, Leaf, Handshake, ChevronRight,
  ArrowRight, Star, Quote, Send
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    headline: 'An Imperial Legend',
    subline: 'of Eminence',
    desc: 'We thrive for excellence with the sharpened swords of Leadership, Experience and Opportunity.',
    accent: 'Serving Sample City since 2005',
  },
  {
    headline: 'Collaborate With Us',
    subline: 'For a Change',
    desc: 'True value of one\'s life can be measured if the person is able to make a significant difference in someone\'s life.',
    accent: '500+ dedicated volunteers',
  },
  {
    headline: 'Together We Rise',
    subline: 'Together We Serve',
    desc: 'From clean water to education — our chapters work across 9 humanitarian areas to uplift communities.',
    accent: '1,200+ projects completed',
  },
];

const projectAreas = [
  { icon: Heart, title: 'Nutritional', desc: 'Linking health care, agriculture and business to promote nutritional health and food security.', color: 'from-red-500 to-rose-600' },
  { icon: Droplets, title: 'Pure Water', desc: 'Lives change when communities gain access to clean water. Let\'s experience it together.', color: 'from-blue-400 to-cyan-500' },
  { icon: Stethoscope, title: 'Health Care', desc: 'Health care is an essential component of a life of dignity and well-being.', color: 'from-green-500 to-emerald-600' },
  { icon: BookOpen, title: 'Education', desc: 'Education is the most powerful weapon which you can use to change the world.', color: 'from-amber-500 to-orange-500' },
  { icon: Building2, title: 'Infrastructure', desc: 'Infrastructure creates the form of a city and enables life to go on in a meaningful way.', color: 'from-purple-500 to-violet-600' },
  { icon: Users, title: 'Social Affairs', desc: 'We cannot live only for ourselves. A thousand fibers connect us with our fellow men.', color: 'from-teal-500 to-cyan-600' },
  { icon: Baby, title: 'Child Care', desc: 'They may forget what you said, but they will never forget how you made them feel.', color: 'from-pink-500 to-rose-500' },
  { icon: UsersRound, title: 'Women Empowerment', desc: 'Every woman\'s success should be an inspiration to another. We\'re strongest when we cheer each other on.', color: 'from-fuchsia-500 to-purple-600' },
  { icon: Leaf, title: 'Environment', desc: 'A person who cares about the earth will resonate with its natural purity and beauty.', color: 'from-lime-500 to-green-600' },
];

const events = [
  {
    title: 'NOVA 25/26 – Leadership Summit',
    date: 'March 2026',
    desc: 'NOVA was a transformative two-day leadership journey, igniting passion, purpose and potential in every participant. Through impactful sessions and immersive team-building, young leaders were empowered to lead with empathy, resilience and vision.',
    tag: 'Leadership',
    color: 'bg-blue-600',
    href: '/events/nova',
  },
  {
    title: 'Harmonia – Live in Concert',
    date: 'January 2026',
    desc: 'Harmonia is more than a concert. It\'s a movement of compassion, uniting music and humanity to uplift lives in need. We raised funds to support families facing critical medical challenges across the island.',
    tag: 'Fundraiser',
    color: 'bg-amber-600',
    href: '/events/harmonia',
  },
  {
    title: 'Debate 2025 – Inter-Leo Championship',
    date: 'November 2025',
    desc: 'The Inter-Leo Debate Championship champions critical thinking and confident expression. With over 60 debate teams and 400+ participants, the tournament continues to nurture meaningful discourse and inspire the next generation of leaders.',
    tag: 'Competition',
    color: 'bg-emerald-600',
    href: '/events/debate',
  },
];

const teamMembers = [
  { name: 'Leo Samantha Perera', role: 'President', initial: 'SP' },
  { name: 'Leo Kavinda Jayawardena', role: 'Vice President', initial: 'KJ' },
  { name: 'Leo Nimesha Fernando', role: 'Secretary', initial: 'NF' },
  { name: 'Leo Rasith Bandara', role: 'Treasurer', initial: 'RB' },
  { name: 'Leo Dilsha Weerasinghe', role: 'Asst. Secretary', initial: 'DW' },
  { name: 'Leo Thilina Gunasekara', role: 'Asst. Treasurer', initial: 'TG' },
];

const testimonials = [
  { name: 'Leo Anjali Dias', role: 'Chapter Member', quote: 'Being part of this Leo Club transformed my perspective on leadership and community. The bonds we build are for life.', stars: 5 },
  { name: 'Leo Roshan Silva', role: 'Activity Coordinator', quote: 'Every project we undertake teaches us something new. This club has made me a better person and a stronger leader.', stars: 5 },
  { name: 'Leo Madara Wickramasinghe', role: 'Former President', quote: 'The Leo Club of Sample City has always been at the forefront of community change. Proud of what we have achieved together.', stars: 5 },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'origin' | 'achievement' | 'experience'>('origin');

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0033A0]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFD700]/20 border border-[#FFD700]/30 text-[#FFD700] text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
                {heroSlides[slide].accent}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-2 transition-all duration-500 font-display">
                {heroSlides[slide].headline}
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black gold-text leading-tight mb-6 transition-all duration-500 font-display">
                {heroSlides[slide].subline}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl transition-all duration-500">
                {heroSlides[slide].desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#donate"
                  className="flex items-center gap-2 bg-[#FFD700] text-[#0033A0] font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:scale-105 text-sm"
                >
                  <Handshake className="w-4 h-4" /> Donate Now
                </Link>
                <Link
                  href="/current-leaders"
                  className="flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300 text-sm"
                >
                  Learn About Us <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              {/* Slide indicators */}
              <div className="flex gap-2 mt-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    title={`Go to slide ${i + 1}`}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === slide ? 'bg-[#FFD700] w-8' : 'bg-white/30 w-4'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Logo / Visual */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#FFD700]/30 flex items-center justify-center relative">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-[#FFD700]/20 flex items-center justify-center">
                    <div className="w-44 h-44 md:w-56 md:h-56 bg-linear-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/40">
                      <div className="text-center">
                        <div className="text-[#0033A0] font-black text-5xl md:text-6xl leading-none">LC</div>
                        <div className="text-[#0033A0]/70 text-xs font-bold mt-1 tracking-widest">SAMPLE CITY</div>
                      </div>
                    </div>
                  </div>
                  {/* Orbit dots */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    {[0, 90, 180, 270].map((deg) => (
                      <div
                        key={deg}
                        className="absolute w-4 h-4 bg-[#FFD700] rounded-full"
                        style={{ top: '50%', left: '50%', transform: `rotate(${deg}deg) translateX(140px) translateY(-50%)` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT TABS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#0033A0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display">A Non-Profit Charity Organization</h2>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {(['origin', 'achievement', 'experience'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${activeTab === tab ? 'bg-[#0033A0] text-white shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {activeTab === 'origin' && (
                <div className="space-y-5">
                  <h3 className="text-3xl font-black text-gray-900 font-display">Our Humble Beginnings</h3>
                  <p className="text-gray-600 leading-relaxed">The Leo Club of Sample City was founded in 2005 by a group of passionate youth who believed that young people could make a real difference in their communities. Starting with just 12 dedicated members, the club quickly grew into one of the most active Leo chapters in the district.</p>
                  <p className="text-gray-600 leading-relaxed">Sponsored by the Lions Club of Sample City and affiliated with Leo District 306 D2, our club has maintained a steadfast commitment to the Leo motto: <em className="text-[#0033A0] font-semibold">&ldquo;Leadership, Experience and Opportunity.&rdquo;</em></p>
                  <Link href="/leoism" className="inline-flex items-center gap-2 text-[#0033A0] font-semibold hover:gap-4 transition-all duration-300 text-sm">
                    Learn About Leoism <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
              {activeTab === 'achievement' && (
                <div className="space-y-5">
                  <h3 className="text-3xl font-black text-gray-900 font-display">Milestones & Recognition</h3>
                  <p className="text-gray-600 leading-relaxed">Over two decades, we have earned recognition at the district, national and international levels. Our awards include the Best Club Award (2019, 2022, 2024), Best President Award, and multiple Excellence Awards from Leo International.</p>
                  <ul className="space-y-3">
                    {['District Best Club Award – 2024', 'International Service Award – 2022', 'Best President (Leo Samantha Perera) – 2023', 'Environmental Excellence Award – 2021'].map((a) => (
                      <li key={a} className="flex items-center gap-3 text-sm text-gray-700">
                        <Star className="w-4 h-4 text-[#FFD700] shrink-0 fill-current" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <Link href="/awards" className="inline-flex items-center gap-2 text-[#0033A0] font-semibold hover:gap-4 transition-all duration-300 text-sm">
                    View All Awards <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
              {activeTab === 'experience' && (
                <div className="space-y-5">
                  <h3 className="text-3xl font-black text-gray-900 font-display">What You Gain</h3>
                  <p className="text-gray-600 leading-relaxed">Joining our Leo Club is more than volunteering — it is a life-changing journey. Members develop public speaking skills, project management competence, leadership confidence, and lifelong friendships across communities.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Leadership Training', 'Public Speaking', 'Team Management', 'Event Planning', 'Community Impact', 'Global Network'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm text-gray-700 bg-blue-50 rounded-lg px-3 py-2">
                        <div className="w-2 h-2 bg-[#0033A0] rounded-full" />
                        {skill}
                      </div>
                    ))}
                  </div>
                  <Link href="/current-leaders" className="inline-flex items-center gap-2 text-[#0033A0] font-semibold hover:gap-4 transition-all duration-300 text-sm">
                    Meet Our Leaders <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right side visual */}
            <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <h3 className="text-4xl font-black mb-2 font-display gold-text">What We Do?</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">Our club operates across 9 humanitarian areas, touching thousands of lives annually throughout our community and beyond.</p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['Nutritional', 'Pure Water', 'Health Care', 'Education', 'Infrastructure', 'Social Affairs', 'Child Care', 'Women Empowerment'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS COUNTER ── */}
      <section className="py-16 bg-linear-to-r from-[#0033A0] to-[#001f6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterCard target={1200} suffix="+" label="Projects Completed" />
            <CounterCard target={500} suffix="+" label="Active Volunteers" />
            <CounterCard target={20} suffix="+" label="Years of Service" />
            <CounterCard target={15000} suffix="+" label="Lives Impacted" />
          </div>
        </div>
      </section>

      {/* ── PROJECT AREAS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0033A0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Our Impact Areas</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display">We Believe That We Can</h2>
            <h2 className="text-4xl md:text-5xl font-black font-display" style={{ background: 'linear-gradient(135deg,#0033A0,#0066FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              Save More Lives With You
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-2xl p-6 card-hover border border-gray-100 shadow-sm group cursor-pointer">
                <div className={`w-12 h-12 bg-linear-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATION BOX ── */}
      <section id="donate" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#0033A0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Support Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display">Make a Donation</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">Your contribution helps us fund projects that change lives across our community.</p>
          </div>
          <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bank 1 */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-[#FFD700] font-bold text-sm mb-4 uppercase tracking-wider">Bank of Ceylon</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-white/60">Account Name</span><span className="font-semibold">Leo Club Sample City</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Account No.</span><span className="font-semibold">00 12345678</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Branch</span><span className="font-semibold">Sample City Branch</span></div>
                </div>
              </div>
              {/* Bank 2 */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-[#FFD700] font-bold text-sm mb-4 uppercase tracking-wider">People&apos;s Bank</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-white/60">Account Name</span><span className="font-semibold">Leo Club Sample City</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Account No.</span><span className="font-semibold">111 2222 3333 4444</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Branch</span><span className="font-semibold">Central Branch (111)</span></div>
                </div>
              </div>
            </div>
            <p className="text-white/50 text-xs text-center mt-6">After transferring, please email us at <span className="text-[#FFD700]">info@leoclubsamplecity.org</span> with your receipt for acknowledgement.</p>
          </div>
        </div>
      </section>

      {/* ── KEY EVENTS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block bg-blue-50 text-[#0033A0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Events</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display">Catch Up On Our</h2>
              <h2 className="text-4xl md:text-5xl font-black text-[#0033A0] font-display">Most Recent Highlights</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#0033A0] font-semibold hover:gap-4 transition-all duration-300 text-sm whitespace-nowrap">
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group">
                <div className={`${event.color} h-2`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-white bg-gray-800 px-3 py-1 rounded-full">{event.tag}</span>
                    <span className="text-xs text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight group-hover:text-[#0033A0] transition-colors">{event.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{event.desc}</p>
                  <Link href={event.href} className="inline-flex items-center gap-2 text-[#0033A0] text-sm font-semibold hover:gap-4 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0033A0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display">Meet Our Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Our dedicated executive board drives our mission forward every single day.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center bg-gray-50 hover:bg-[#0033A0] rounded-2xl p-8 transition-all duration-300 card-hover border border-gray-100 hover:border-transparent">
                <div className="w-20 h-20 bg-linear-to-br from-[#0033A0] to-[#001f6b] group-hover:from-[#FFD700] group-hover:to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-white group-hover:text-[#0033A0] font-black text-xl transition-colors duration-300">{member.initial}</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{member.name}</h3>
                <p className="text-[#0033A0] group-hover:text-[#FFD700] text-sm font-semibold mt-1 transition-colors duration-300">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/current-leaders"
              className="inline-flex items-center gap-2 bg-[#0033A0] text-white font-bold px-8 py-4 rounded-full hover:bg-[#001f6b] transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:scale-105 text-sm"
            >
              View Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-linear-to-br from-[#0a0f1e] to-[#001f6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 text-[#FFD700] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black text-white font-display">Voices of Our Members</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <Quote className="w-8 h-8 text-[#FFD700] mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                    <span className="text-[#0033A0] font-black text-sm">{t.name.split(' ')[1][0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / GET IN TOUCH ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#0033A0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display">Get In Touch</h2>
            <p className="text-gray-500 mt-3">Have a question or want to collaborate? We&apos;d love to hear from you.</p>
          </div>
          <div className="bg-linear-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="+94 77 xxx xxxx" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all resize-none" />
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="inline-flex items-center gap-2 bg-[#0033A0] text-white font-bold px-10 py-4 rounded-full hover:bg-[#001f6b] transition-all duration-300 shadow-lg hover:scale-105 text-sm">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

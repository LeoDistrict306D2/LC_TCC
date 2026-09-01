import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const projects = [
  { title: 'NOVA 25/26 – Leadership Summit', date: 'March 2026', category: 'Leadership', color: 'bg-blue-600', desc: 'A two-day transformative leadership journey, igniting passion, purpose and potential in every participant through impactful sessions and team-building activities.', href: '/events/nova' },
  { title: 'Harmonia – Live in Concert', date: 'January 2026', category: 'Fundraiser', color: 'bg-amber-500', desc: 'A charity concert uniting music and compassion to raise funds for families facing critical medical emergencies.', href: '/events/harmonia' },
  { title: 'Debate 2025 – Inter-Leo Championship', date: 'November 2025', category: 'Competition', color: 'bg-emerald-600', desc: 'An inter-Leo debate championship with 60+ teams and 400+ participants, championing critical thinking and confident expression.', href: '/events/debate' },
  { title: 'Jala Aruna – Clean Water Drive', date: 'September 2025', category: 'Community', color: 'bg-cyan-600', desc: 'Expanded our landmark clean water initiative, providing safe drinking water wells to 5 additional rural villages.', href: '#' },
  { title: 'Sisu Nena – Education Drive 2025', date: 'August 2025', category: 'Education', color: 'bg-purple-600', desc: 'Distributed school supplies, books and scholarships to over 350 underprivileged students across 12 schools.', href: '#' },
  { title: 'Suwa Wana – Tree Planting Campaign', date: 'June 2025', category: 'Environment', color: 'bg-lime-600', desc: 'Coordinated a district-wide tree planting initiative with 5,000 trees planted across 8 locations in a single day.', href: '#' },
  { title: 'Hitha Suwa – Blood Donation Camp', date: 'May 2025', category: 'Health', color: 'bg-red-600', desc: 'Organised in partnership with the National Blood Bank. 350+ units of blood collected, helping over 1,000 patients.', href: '#' },
  { title: 'Elder Care – Nursing Home Drive', date: 'March 2025', category: 'Social', color: 'bg-orange-500', desc: 'Visited 3 nursing homes, providing essential supplies, entertainment and heartfelt companionship to over 120 elderly residents.', href: '#' },
  { title: 'Viridu 2024 – Environmental Awareness', date: 'December 2024', category: 'Environment', color: 'bg-teal-500', desc: 'An island-wide awareness campaign on responsible waste management and upcycling, reaching 5,000+ students.', href: '#' },
];

const categoryColors: Record<string, string> = {
  Leadership: 'bg-blue-100 text-blue-700',
  Fundraiser: 'bg-amber-100 text-amber-700',
  Competition: 'bg-emerald-100 text-emerald-700',
  Community: 'bg-cyan-100 text-cyan-700',
  Education: 'bg-purple-100 text-purple-700',
  Environment: 'bg-lime-100 text-lime-700',
  Health: 'bg-red-100 text-red-700',
  Social: 'bg-orange-100 text-orange-700',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="A showcase of our most impactful community service initiatives across all humanitarian areas."
        breadcrumbs={[{ label: 'Projects' }, { label: 'Project Map' }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Stats banner */}
        <div className="bg-linear-to-r from-[#0033A0] to-[#001f6b] rounded-3xl p-8 text-white mb-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['1,200+', 'Total Projects'], ['500+', 'Volunteers'], ['15,000+', 'Lives Impacted'], ['9', 'Service Areas']].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-black text-[#FFD700]">{v}</div>
              <div className="text-white/60 text-sm">{l}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover group">
              <div className={`${project.color} h-2`} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[project.category] ?? 'bg-gray-100 text-gray-700'}`}>
                    <Tag className="w-3 h-3 inline mr-1" />{project.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{project.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3 group-hover:text-[#0033A0] transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.desc}</p>
                <Link href={project.href} className="inline-flex items-center gap-2 text-[#0033A0] text-sm font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

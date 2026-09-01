import PageHeader from '@/components/PageHeader';
import { Trophy, Star, Award, Globe } from 'lucide-react';

const awards = [
  {
    year: '2024',
    category: 'District Award',
    title: 'Best Leo Club – District 306 D2',
    description: 'Awarded for outstanding community service, membership growth and club administration throughout the 2023/24 chapter year.',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
    level: 'District',
  },
  {
    year: '2024',
    category: 'Individual Award',
    title: 'Best Leo President – Leo Samantha Perera',
    description: 'Recognised for exceptional leadership, vision and dedication to the club\'s growth and humanitarian mission.',
    icon: Star,
    color: 'from-blue-500 to-blue-700',
    level: 'District',
  },
  {
    year: '2023',
    category: 'International Award',
    title: 'Leo International Service Award',
    description: 'Recognised by Leo International for the "Jala Aruna" Water Project which provided clean drinking water to over 2,000 families.',
    icon: Globe,
    color: 'from-emerald-500 to-green-600',
    level: 'International',
  },
  {
    year: '2022',
    category: 'District Award',
    title: 'Best Community Project – "Sisu Nena" Education Drive',
    description: 'Awarded for the most impactful community project in the district. The education initiative reached 1,200 rural students.',
    icon: Award,
    color: 'from-purple-500 to-violet-600',
    level: 'District',
  },
  {
    year: '2022',
    category: 'District Award',
    title: 'Best Leo Club – District 306 D2',
    description: 'Second district-level best club award for consistent performance and community impact during the 2021/22 chapter year.',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
    level: 'District',
  },
  {
    year: '2021',
    category: 'Environmental Award',
    title: 'Environmental Excellence Award',
    description: 'Presented for the "Suwa Wana" tree planting initiative which resulted in planting over 10,000 trees island-wide.',
    icon: Award,
    color: 'from-lime-500 to-green-500',
    level: 'National',
  },
  {
    year: '2020',
    category: 'Service Award',
    title: 'COVID-19 Community Response Award',
    description: 'Honoured for mobilising 200+ volunteers during the pandemic to deliver essential supplies to over 500 vulnerable families.',
    icon: Star,
    color: 'from-red-500 to-rose-600',
    level: 'National',
  },
  {
    year: '2019',
    category: 'District Award',
    title: 'Best Leo Club – District 306 D2',
    description: 'First district-level best club award recognising excellence in all club administration and service metrics.',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
    level: 'District',
  },
  {
    year: '2018',
    category: 'Individual Award',
    title: 'Best Leo Activity Coordinator',
    description: 'Awarded to Leo Priya Rajakaruna for coordinating the highest number of successful service projects in the district.',
    icon: Star,
    color: 'from-cyan-500 to-blue-500',
    level: 'District',
  },
];

const levelColors: Record<string, string> = {
  International: 'bg-emerald-100 text-emerald-700',
  National: 'bg-purple-100 text-purple-700',
  District: 'bg-blue-100 text-blue-700',
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Two decades of excellence recognised at district, national and international levels."
        breadcrumbs={[{ label: 'Leo Club SC' }, { label: 'Awards' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Trophy header */}
        <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 text-center text-white mb-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
          <Trophy className="w-14 h-14 text-[#FFD700] mx-auto mb-4" />
          <h2 className="text-3xl font-black font-display mb-2">Our Hall of Fame</h2>
          <p className="text-white/70 max-w-xl mx-auto">Recognition from District 306 D2, Lions International, and national organisations for our dedication to service and leadership.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
            {[['9+', 'District Awards'], ['3+', 'National Awards'], ['2+', 'Int\'l Awards'], ['5+', 'Individual Awards']].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black text-[#FFD700]">{v}</div>
                <div className="text-white/60 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div key={award.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden group">
              {/* Color band */}
              <div className={`h-1.5 bg-linear-to-r ${award.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-linear-to-br ${award.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <award.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${levelColors[award.level]}`}>{award.level}</span>
                    <span className="text-xs text-gray-400">{award.year}</span>
                  </div>
                </div>
                <div className="text-[#0033A0] text-xs font-bold uppercase tracking-wider mb-1">{award.category}</div>
                <h3 className="font-bold text-gray-900 text-base leading-tight mb-3">{award.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

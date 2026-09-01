import PageHeader from '@/components/PageHeader';
import { MapPin, Users, Star, Globe } from 'lucide-react';

const memberClubs = [
  'Leo Club of Sample City (Flagship)', 'Leo Club of Sample North', 'Leo Club of Sample South',
  'Leo Club of Sample East', 'Leo Club of Sample West', 'Leo Club of Central Hills',
  'Leo Club of Riverside', 'Leo Club of Tech Campus', 'Leo Club of Green Valley',
  'Leo Club of Harbor Town', 'Leo Club of Sunrise City', 'Leo Club of Silver Lake',
  'Leo Club of Mountain View', 'Leo Club of Palm Beach', 'Leo Club of Northern Springs',
];

export default function DistrictPage() {
  return (
    <>
      <PageHeader
        title="Leo District 306 D2"
        subtitle="Our district's structure, member clubs, and district activities across the region."
        breadcrumbs={[{ label: 'About Us' }, { label: 'Leo District 306 D2' }]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-14">
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 font-display mb-5">About Leo District 306 D2</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>Leo District 306 D2 is one of the most active Leo Districts in Sri Lanka, operating under Multiple District 306. The district comprises over 15 Leo Clubs spread across the central and southern regions of the island.</p>
              <p>The district is led by a District Governor (DG Leo) and a District Board that coordinates club activities, conventions, and inter-club initiatives throughout the chapter year.</p>
              <p>Annual district events include the District Leo Conference (DLC), Service Project Competitions, and Leadership Training Programmes.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Users, val: '15+', label: 'Member Clubs', color: 'from-blue-500 to-blue-700' },
              { icon: Star, val: '3,000+', label: 'District Leos', color: 'from-amber-400 to-orange-500' },
              { icon: MapPin, val: '10+', label: 'Districts (MD306)', color: 'from-purple-500 to-violet-600' },
              { icon: Globe, val: '20+', label: 'Annual Events', color: 'from-emerald-500 to-teal-500' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm card-hover">
                <div className={`w-12 h-12 bg-linear-to-br ${s.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{s.val}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Clubs */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Member Clubs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {memberClubs.map((club, i) => (
              <div key={club} className={`flex items-center gap-3 rounded-xl p-4 border ${i === 0 ? 'bg-[#0033A0] border-[#0033A0] text-white' : 'bg-white border-gray-100 text-gray-700'} shadow-sm`}>
                <MapPin className={`w-4 h-4 shrink-0 ${i === 0 ? 'text-[#FFD700]' : 'text-[#0033A0]'}`} />
                <span className="text-sm font-medium">{club}</span>
              </div>
            ))}
          </div>
        </section>

        {/* District Events */}
        <section className="bg-gray-50 rounded-3xl p-10">
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Annual District Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { title: 'District Leo Conference (DLC)', desc: 'The flagship annual event bringing all district Leos together for sessions, workshops and fellowship.' },
              { title: 'District Service Competition', desc: 'Clubs compete for recognition in various service categories including environment, education and health.' },
              { title: 'Leadership Training (LEAD)', desc: 'A two-day workshop on public speaking, project management and Leo club administration.' },
              { title: 'Inter-Club Sports Meet', desc: 'Annual sports day promoting fellowship and healthy competition among member clubs.' },
              { title: 'District President\'s Night', desc: 'Year-end gala celebrating the achievements of member clubs and outstanding Leo members.' },
              { title: 'Joint Leo-Lions Projects', desc: 'Collaborative service projects between Leo Clubs and their sponsoring Lions Clubs.' },
            ].map((e) => (
              <div key={e.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{e.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

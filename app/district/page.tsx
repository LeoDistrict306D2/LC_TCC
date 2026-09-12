import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { MapPin, Users, Building2, FolderCheck } from 'lucide-react';

const memberClubs = [
  'Leo Club of Arawwala',
  'Leo Club of Colombo Monarch',
  'Leo Club of Dehiwala East',
  'Leo Club of Ethos International College, Colombo VII',
  'Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS',
  'Leo Club of Godigamuwa',
  'Leo Club of Kalubowila',
  'Leo Club of Millaniya',
  'Leo Club of Panadura Alubomulla',
  'Leo Club of Pepiliyana Woodlands',
  'Leo Club of Piliyandala',
  'Leo Club of Piliyandala Central College',
  'Leo Club of Polgasowita',
  'Leo Club of Raththanapitiya',
  'Leo Club of Saegis Campus',
  'Leo Club of Sri Lanka Technological Campus',
  'Leo Club of Taxila Central College',
  'Leo Club of University of Moratuwa',
  'Leo Club of University of Sri Jayewardenepura',
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
              <p>
                Leo District 306 D2 is a vibrant district under the Leo Multiple District Council of
                Sri Lanka and Maldives. It covers key areas including Colombo City (Milagiriya,
                Pamankada, Havelock Town), the eastern stretch of Galle Road, and suburbs such as
                Kesbewa, Homagama, Kalutara, Bandaragama, Horana, Bulathsinhala, Ingiriya, and
                Matugama.
              </p>
              <p>
                The district plays a vital role in empowering youth through service and leadership
                across these diverse communities, running under the 2026/27 theme &ldquo;United in
                Purpose&rdquo; with Leo Lion Buddhika Abenayake as District President.
              </p>
            </div>
            <a
              href="https://leodistrict306d2.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0033A0] text-white text-sm font-bold hover:bg-[#001f6b] transition-colors duration-300"
            >
              Explore Leo District 306 D2
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Users, val: '1000+', label: 'Leos', color: 'from-blue-500 to-blue-700' },
              { icon: Building2, val: '18', label: 'LEO Clubs', color: 'from-amber-400 to-orange-500' },
              { icon: MapPin, val: '3', label: 'Regions', color: 'from-purple-500 to-violet-600' },
              { icon: FolderCheck, val: '200+', label: 'Projects Completed', color: 'from-emerald-500 to-teal-500' },
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

        {/* Map */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/district/map.png"
            alt="Map of Sri Lanka with Leo District 306 D2 highlighted"
            width={370}
            height={493}
            className="w-full max-w-[240px] h-auto"
          />
          <div className="mt-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#FFD700]" />
            <span className="text-sm text-gray-500">District 306 D2</span>
          </div>
        </div>

        {/* Member Clubs */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Member Clubs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {memberClubs.map((club) => {
              const isUs = club === 'Leo Club of Taxila Central College';
              return (
                <div key={club} className={`flex items-center gap-3 rounded-xl p-4 border ${isUs ? 'bg-[#0033A0] border-[#0033A0] text-white' : 'bg-white border-gray-100 text-gray-700'} shadow-sm`}>
                  <MapPin className={`w-4 h-4 shrink-0 ${isUs ? 'text-[#FFD700]' : 'text-[#0033A0]'}`} />
                  <span className="text-sm font-medium">
                    {club}
                    {isUs ? ' (This Club)' : ''}
                  </span>
                </div>
              );
            })}
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

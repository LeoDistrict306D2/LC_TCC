import PageHeader from '@/components/PageHeader';
import { Crown, Shield, Star, Users } from 'lucide-react';

const keyOfficers = [
  { role: 'Senior Treasurer', name: 'Eng. Suresh Karunarathna', initial: 'SK', icon: Shield },
  { role: 'Leo Advisor', name: 'Lion Pradeep Jayasuriya', initial: 'PJ', icon: Star },
  { role: 'President', name: 'Leo Samantha Perera', initial: 'SP', icon: Crown },
  { role: 'Vice President', name: 'Leo Kavinda Jayawardena', initial: 'KJ', icon: Users },
  { role: 'Secretary', name: 'Leo Nimesha Fernando', initial: 'NF', icon: Users },
  { role: 'Treasurer', name: 'Leo Rasith Bandara', initial: 'RB', icon: Users },
  { role: 'Assistant Secretary', name: 'Leo Dilsha Weerasinghe', initial: 'DW', icon: Users },
  { role: 'Assistant Treasurer', name: 'Leo Thilina Gunasekara', initial: 'TG', icon: Users },
];

const chiefCoordinators = [
  'Leo Chathurani Madushika',
  'Leo Ridma Jayakody',
  'Leo Pasidu Seneviratne',
  'Leo Lochana Amarasinghe',
];

const chiefRoles = [
  { role: 'Chief Designer', name: 'Leo Piyumi Aberatne' },
  { role: 'Chief Editor', name: 'Leo Sayumi Wickrama' },
];

const activityCoordinators = [
  'Leo Chamalee Dias',
  'Leo Hiroshi Wijesinghe',
  'Leo Binara Pathirana',
  'Leo Dasuni Herath',
  'Leo Januka Rathnayaka',
];

const directors = [
  { portfolio: 'Health & Nutritional Development', name: 'Leo Madhavi Jayawardena' },
  { portfolio: 'International & Lions Relationships', name: 'Leo Sahan Perera' },
  { portfolio: 'Quality Education & Literacy', name: 'Leo Thakshila Ranasinghe' },
  { portfolio: 'Infrastructure', name: 'Leo Ruwan Chandrasekara' },
  { portfolio: 'Senior Citizen Development', name: 'Leo Amani Karunarathna' },
  { portfolio: 'Childcare', name: 'Leo Manuri Senanayake' },
  { portfolio: 'Women Empowerment', name: 'Leo Sajani Dissanayake' },
  { portfolio: 'Youth Empowerment & Leadership', name: 'Leo Mahesh Abeywickrama' },
  { portfolio: 'Drug, Crime & Accident Prevention', name: 'Leo Menaka Gunawardena' },
  { portfolio: 'Multi Service', name: 'Leo Sanduni Rajapaksha' },
  { portfolio: 'Environment', name: 'Leo Dilmi Wickramasinghe' },
  { portfolio: 'Disaster Management & Prevention', name: 'Leo Yasiru Bandaranayake' },
  { portfolio: 'Peace, Religious & Cultural Affairs', name: 'Leo Nisal Marasinghe' },
  { portfolio: 'Sports', name: 'Leo Supun Jayasena' },
  { portfolio: 'Fellowship & Membership Growth', name: 'Leo Chamara Kumarasinghe' },
  { portfolio: 'Web & Public Relations', name: 'Leo Devindi Herath' },
  { portfolio: 'Clean Water & Energy Conservation', name: 'Leo Tharushi Gamage' },
  { portfolio: 'Responsible Consumption & Waste Management', name: 'Leo Minudi Weerathunga' },
];

const editorialPanel = [
  { role: 'Editorial Panel Head', name: 'Leo Rashmi Wijetunga' },
  { role: 'Editorial Panelist', name: 'Leo Prabodha Jayarathna' },
  { role: 'Editorial Panelist', name: 'Leo Sadini Kuruppu' },
  { role: 'Editorial Panelist', name: 'Leo Shenara Opanayaka' },
  { role: 'Editorial Panelist', name: 'Leo Tamasha Sirisena' },
  { role: 'Editorial Panelist', name: 'Leo Easha Rathnayaka' },
];

const itPanel = [
  { role: 'IT Panel Head', name: 'Leo Erangi Desilva' },
  { role: 'IT Panelist', name: 'Leo Rashan Perera' },
  { role: 'IT Panelist', name: 'Leo Bilinda Weerasekara' },
  { role: 'IT Panelist', name: 'Leo Bhanu Jayasundara' },
  { role: 'IT Panelist', name: 'Leo Ishan Naveen' },
  { role: 'IT Panelist', name: 'Leo Sahas Gunasekara' },
];

export default function CurrentLeadersPage() {
  return (
    <>
      <PageHeader
        title="Current Leaders"
        subtitle="Meet the dedicated team leading Leo Club of Sample City for the 2025/26 chapter year."
        breadcrumbs={[{ label: 'Leo Club SC' }, { label: 'Current Leaders' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Key Officers */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#0033A0] rounded-full" />
            <h2 className="text-2xl font-black text-gray-900 font-display">Key Officers</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {keyOfficers.map((officer) => (
              <div key={officer.name} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm card-hover group">
                <div className="w-16 h-16 bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-black text-xl">{officer.initial}</span>
                </div>
                <div className="text-[#0033A0] text-xs font-bold uppercase tracking-wider mb-1">{officer.role}</div>
                <div className="text-gray-800 font-semibold text-sm">{officer.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Chief Coordinators */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#FFD700] rounded-full" />
            <h2 className="text-2xl font-black text-gray-900 font-display">Chief Activity Coordinators</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {chiefCoordinators.map((name) => (
              <div key={name} className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#0033A0] font-black text-sm">{name.split(' ')[1][0]}</span>
                </div>
                <div className="text-gray-800 font-semibold text-sm">{name}</div>
                <div className="text-gray-400 text-xs mt-1">Chief Activity Coordinator</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {chiefRoles.map((r) => (
              <div key={r.role} className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#0033A0] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-sm">{r.name.split(' ')[1][0]}</span>
                </div>
                <div>
                  <div className="text-[#0033A0] text-xs font-bold">{r.role}</div>
                  <div className="text-gray-800 font-semibold text-sm">{r.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Coordinators */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-green-500 rounded-full" />
            <h2 className="text-2xl font-black text-gray-900 font-display">Activity Coordinators</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {activityCoordinators.map((name) => (
              <div key={name} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-bold text-sm">{name.split(' ')[1][0]}</span>
                </div>
                <div className="text-gray-800 font-semibold text-sm">{name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Director Board */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-purple-500 rounded-full" />
            <h2 className="text-2xl font-black text-gray-900 font-display">Director Board</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {directors.map((d) => (
              <div key={d.portfolio} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-violet-600 rounded-lg shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <div className="text-gray-400 text-10 text-[10px] uppercase tracking-wider font-bold">Director of</div>
                  <div className="text-gray-800 font-semibold text-sm leading-tight">{d.portfolio}</div>
                  <div className="text-[#0033A0] text-xs mt-1 font-medium">{d.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial & IT Panels */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Editorial */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-rose-500 rounded-full" />
              <h2 className="text-2xl font-black text-gray-900 font-display">Editorial Panel</h2>
            </div>
            <div className="space-y-3">
              {editorialPanel.map((m) => (
                <div key={m.name} className="flex items-center gap-3 bg-rose-50 border border-rose-100 rounded-xl p-3">
                  <div className="w-9 h-9 bg-rose-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{m.name.split(' ')[1][0]}</span>
                  </div>
                  <div>
                    <div className="text-gray-800 font-semibold text-sm">{m.name}</div>
                    <div className="text-gray-400 text-xs">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Panel */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-cyan-500 rounded-full" />
              <h2 className="text-2xl font-black text-gray-900 font-display">IT & PR Panel</h2>
            </div>
            <div className="space-y-3">
              {itPanel.map((m) => (
                <div key={m.name} className="flex items-center gap-3 bg-cyan-50 border border-cyan-100 rounded-xl p-3">
                  <div className="w-9 h-9 bg-cyan-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{m.name.split(' ')[1][0]}</span>
                  </div>
                  <div>
                    <div className="text-gray-800 font-semibold text-sm">{m.name}</div>
                    <div className="text-gray-400 text-xs">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

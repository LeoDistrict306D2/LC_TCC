import PageHeader from '@/components/PageHeader';
import { Globe, Users, Map } from 'lucide-react';

const districts = [
  { code: '306 A1', region: 'Western Province – North', clubs: 18 },
  { code: '306 A2', region: 'Western Province – South', clubs: 15 },
  { code: '306 B1', region: 'Central Province', clubs: 12 },
  { code: '306 B2', region: 'Sabaragamuwa Province', clubs: 10 },
  { code: '306 C1', region: 'Southern Province – East', clubs: 11 },
  { code: '306 C2', region: 'Southern Province – West', clubs: 9 },
  { code: '306 D1', region: 'North Western Province', clubs: 13 },
  { code: '306 D2', region: 'North Central Province', clubs: 15, highlight: true },
  { code: '306 E1', region: 'Uva Province', clubs: 8 },
  { code: '306 E2', region: 'Eastern Province', clubs: 7 },
  { code: '306 F', region: 'Northern Province', clubs: 6 },
];

export default function MultipleDistrictPage() {
  return (
    <>
      <PageHeader
        title="Multiple District 306"
        subtitle="Sri Lanka's national Leo structure under Lions Multiple District 306."
        breadcrumbs={[{ label: 'About Us' }, { label: 'Multiple District 306' }]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-14">
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 font-display mb-5">About Multiple District 306</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>Multiple District 306 is the governing body for all Lions and Leo activities in Sri Lanka. It comprises 11 sub-districts spread across all 9 provinces of the island, with each sub-district managing Leo and Lions Clubs in their geographic area.</p>
              <p>The Multiple District is led by a Council Chairman (CC) and Council Secretary (CS) elected annually. The council coordinates national-level initiatives, inter-district competitions and the annual Leo Multiple District Convention.</p>
              <p>Sri Lanka&apos;s Leo movement is one of the most vibrant in Asia, with over 120 active Leo Clubs and 5,000+ members nationally.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Globe, val: '11', label: 'Sub-Districts', color: 'from-blue-500 to-blue-700' },
              { icon: Users, val: '120+', label: 'Leo Clubs (SL)', color: 'from-red-400 to-rose-500' },
              { icon: Users, val: '5,000+', label: 'National Leos', color: 'from-amber-400 to-orange-500' },
              { icon: Map, val: '9', label: 'Provinces Covered', color: 'from-emerald-500 to-teal-500' },
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

        {/* Districts Table */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">All Sub-Districts</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0033A0] text-white">
                  <th className="text-left px-6 py-4 text-sm font-bold">District Code</th>
                  <th className="text-left px-6 py-4 text-sm font-bold">Region</th>
                  <th className="text-left px-6 py-4 text-sm font-bold">Leo Clubs</th>
                </tr>
              </thead>
              <tbody>
                {districts.map((d, i) => (
                  <tr key={d.code} className={`border-b border-gray-50 transition-colors ${d.highlight ? 'bg-blue-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-blue-50`}>
                    <td className="px-6 py-4">
                      <span className={`font-bold text-sm px-3 py-1 rounded-full ${d.highlight ? 'bg-[#0033A0] text-white' : 'bg-gray-100 text-gray-700'}`}>{d.code}</span>
                      {d.highlight && <span className="ml-2 text-xs text-[#0033A0] font-semibold">← Our District</span>}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{d.region}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full h-1.5 w-24 overflow-hidden">
                          <div className="bg-[#0033A0] h-full rounded-full" style={{ width: `${(d.clubs / 18) * 100}%` }} />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{d.clubs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* MD Events */}
        <section className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 text-white">
          <h2 className="text-2xl font-black font-display mb-6 text-[#FFD700]">National Level Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['Multiple District Leo Convention', 'National Leo Day', 'MD Leadership Summit', 'Inter-District Competitions', 'National Service Awards', 'MD Presidents\' Seminar'].map((e) => (
              <div key={e} className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full shrink-0" />
                <span className="text-sm font-medium">{e}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

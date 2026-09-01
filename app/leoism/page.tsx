import PageHeader from '@/components/PageHeader';
import { Heart, Globe, Users, Lightbulb, Star } from 'lucide-react';

const leoValues = [
  { icon: Heart, title: 'Service', desc: 'Leos are committed to community service. They give their time, talent and energy to make life better for those in need.', color: 'from-red-500 to-rose-600' },
  { icon: Globe, title: 'Fellowship', desc: 'Leos build bridges across communities, cultures and nations through shared service and friendship.', color: 'from-blue-500 to-blue-700' },
  { icon: Users, title: 'Leadership', desc: 'Through real-world experiences, Leos develop the skills and confidence to lead in their communities and beyond.', color: 'from-purple-500 to-violet-600' },
  { icon: Lightbulb, title: 'Experience', desc: 'Every project and event teaches Leos something new — whether it is planning, teamwork, communication or problem-solving.', color: 'from-amber-400 to-orange-500' },
  { icon: Star, title: 'Opportunity', desc: 'Leoism opens doors. Members gain access to a global network, leadership training and life-changing opportunities.', color: 'from-emerald-500 to-teal-500' },
];

export default function LeoismsPage() {
  return (
    <>
      <PageHeader
        title="Leoism"
        subtitle="Understanding the philosophy, values and mission of the Leo movement worldwide."
        breadcrumbs={[{ label: 'About Us' }, { label: 'Leoism' }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* What is Leoism */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#0033A0] text-xs font-bold uppercase tracking-widest">The Movement</span>
            <h2 className="text-4xl font-black text-gray-900 font-display mt-2 mb-5">What is Leoism?</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Leo Clubs are youth organisations sponsored by Lions Clubs International. The name <strong className="text-[#0033A0]">"Leo"</strong> stands for <strong className="text-[#0033A0]">Leadership, Experience and Opportunity</strong> — the three pillars that define everything a Leo Club does.</p>
              <p>Leo Clubs are made up of young men and women aged 12–30 who are committed to improving their communities and developing their personal leadership capabilities. Through service, Leos grow into compassionate, capable leaders ready to take on the world&apos;s challenges.</p>
              <p>Today, there are over <strong className="text-[#0033A0]">7,000 Leo Clubs</strong> in over <strong className="text-[#0033A0]">140 countries</strong>, making it one of the largest youth service organisations in the world.</p>
            </div>
          </div>
          <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <blockquote className="text-2xl font-black font-display leading-snug mb-6 gold-text" style={{background: 'linear-gradient(135deg,#FFD700,#FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              &ldquo;You are never too young to lead, and never too old to serve.&rdquo;
            </blockquote>
            <div className="space-y-3">
              {['Leadership – Develop skills that shape your future', 'Experience – Gain real-world lessons through service', 'Opportunity – Open doors to a global network'].map((val) => (
                <div key={val} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full shrink-0" />
                  {val}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leo Values */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 font-display">Core Values of Leoism</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leoValues.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-hover group">
                <div className={`w-12 h-12 bg-linear-to-br ${v.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Joining */}
        <section className="bg-gray-50 rounded-3xl p-10 md:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-display mb-4">Who Can Join a Leo Club?</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Leo Clubs welcome young people aged <strong>12 to 30 years</strong>. Junior Leo Clubs serve members aged 12–17, while standard Leo Clubs serve those aged 18–30.</p>
                <p>There are no barriers of gender, religion, race or socioeconomic background. All that is required is a commitment to serve and a desire to grow as a leader.</p>
                <p>Each Leo Club is sponsored by a local Lions Club, ensuring mentorship, resources and support for all members.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Age Range', value: '18 – 30 years (Standard), 12 – 17 (Junior)' },
                { label: 'Membership Fee', value: 'Nominal annual fee — contact your local club' },
                { label: 'Commitment', value: 'Monthly meetings + service projects' },
                { label: 'Sponsor', value: 'Lions Club of Sample City' },
                { label: 'District', value: 'Leo District 306 D2, Multiple District 306' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="w-2 h-2 bg-[#0033A0] rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.label}</div>
                    <div className="text-gray-800 text-sm font-medium mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

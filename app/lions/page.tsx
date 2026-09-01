import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Globe, Users, Heart, ExternalLink } from 'lucide-react';

export default function LionsPage() {
  return (
    <>
      <PageHeader
        title="Lions International"
        subtitle="Discover the parent organization that sponsors and supports Leo Clubs worldwide."
        breadcrumbs={[{ label: 'About Us' }, { label: 'Lions International' }]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-14">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 font-display mb-5">About Lions Clubs International</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Lions Clubs International is the world&apos;s largest service club organization with more than <strong className="text-[#0033A0]">1.4 million members</strong> in over <strong className="text-[#0033A0]">48,000 clubs</strong> across 200+ countries.</p>
              <p>Founded in 1917 by Melvin Jones in Chicago, Lions Clubs International has grown into a global force for good, focusing on vision, hunger, environment, childhood cancer, diabetes, and humanitarian aid.</p>
              <p>Through their sponsorship of Leo Clubs, Lions mentors the next generation of service-minded leaders, providing resources, guidance and a global community.</p>
            </div>
            <Link href="https://www.lionsclubs.org" target="_blank" className="inline-flex items-center gap-2 text-[#0033A0] font-semibold mt-6 hover:gap-4 transition-all duration-300 text-sm">
              Visit Lions International <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Globe, val: '200+', label: 'Countries', color: 'from-blue-500 to-blue-700' },
              { icon: Users, val: '1.4M+', label: 'Members', color: 'from-amber-400 to-orange-500' },
              { icon: Heart, val: '48,000+', label: 'Lion Clubs', color: 'from-red-500 to-rose-600' },
              { icon: Users, val: '7,000+', label: 'Leo Clubs', color: 'from-emerald-500 to-teal-500' },
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
        {/* Focus areas */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Our Five Causes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {['Vision', 'Hunger', 'Environment', 'Childhood Cancer', 'Diabetes'].map((cause) => (
              <div key={cause} className="bg-linear-to-br from-[#0033A0] to-[#001f6b] text-white rounded-2xl p-6 text-center">
                <div className="text-2xl mb-2">🦁</div>
                <div className="font-bold text-sm">{cause}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Relationship */}
        <section className="bg-gray-50 rounded-3xl p-10">
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Lions & Leo Relationship</h2>
          <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4 text-gray-600">
            <p>Every Leo Club is sponsored by a Lions Club. The sponsoring Lions Club provides financial backing, mentorship and administrative support to help Leo Clubs thrive. The Lions Club of Sample City proudly sponsors the Leo Club of Sample City.</p>
            <p>Leo members regularly collaborate with Lions members on large-scale service projects. Upon ageing out of Leo (at 30), many Leos transition to full Lions membership, creating a seamless pathway of lifelong service.</p>
          </div>
        </section>
      </div>
    </>
  );
}

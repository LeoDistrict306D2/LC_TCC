import PageHeader from '@/components/PageHeader';
import { Flag, Flame, Rocket, Star, Trophy, Users } from 'lucide-react';

const milestones = [
  {
    year: '2005',
    title: 'Foundation',
    desc: 'Leo Club of Sample City was founded with 12 charter members, sponsored by the Lions Club of Sample City. The first meeting was held on June 15, 2005.',
    icon: Flag,
    color: 'from-blue-500 to-blue-700',
  },
  {
    year: '2007',
    title: 'First District Recognition',
    desc: 'Received our first district-level recognition for community service excellence. Membership grew to 45 active members.',
    icon: Star,
    color: 'from-yellow-400 to-amber-500',
  },
  {
    year: '2009',
    title: 'Jala Aruna – Water Project',
    desc: 'Launched our landmark clean water initiative providing safe drinking water to 3 rural villages. 800+ families benefited.',
    icon: Flame,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2013',
    title: 'Sisu Nena – Education Drive',
    desc: 'Started the annual education drive providing school supplies, books and scholarships to underprivileged students.',
    icon: Rocket,
    color: 'from-emerald-500 to-green-600',
  },
  {
    year: '2016',
    title: '10th Anniversary & 100+ Projects',
    desc: 'Celebrated our 10th anniversary with over 100 completed community service projects and 200 active members.',
    icon: Trophy,
    color: 'from-purple-500 to-violet-600',
  },
  {
    year: '2019',
    title: 'First Best Club Award',
    desc: 'Won the prestigious District 306 D2 Best Leo Club Award for the first time. A landmark achievement for the chapter.',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
  },
  {
    year: '2020',
    title: 'COVID-19 Relief Mission',
    desc: '200+ volunteers mobilised to deliver essential supplies and medical aid to over 500 vulnerable families during the pandemic.',
    icon: Users,
    color: 'from-red-500 to-rose-600',
  },
  {
    year: '2023',
    title: 'International Recognition',
    desc: 'Awarded the Leo International Service Award for the Jala Aruna water project which expanded to serve 2,000+ families.',
    icon: Star,
    color: 'from-amber-500 to-orange-500',
  },
  {
    year: '2024',
    title: 'Best Club Award – 3rd Time',
    desc: 'Won the Best Leo Club Award for the third time and saw membership reach an all-time high of 350+ active Leos.',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
  },
  {
    year: '2025',
    title: '20th Anniversary & 1200+ Projects',
    desc: 'Celebrating two decades of service. 1,200+ projects completed, 500+ active volunteers, and 15,000+ lives touched.',
    icon: Rocket,
    color: 'from-[#0033A0] to-[#001f6b]',
  },
];

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        title="Journey Towards Excellence"
        subtitle="Tracing two decades of service, growth and impact — from humble beginnings to global recognition."
        breadcrumbs={[{ label: 'Leo Club SC' }, { label: 'Journey Towards Excellence' }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Every great achievement starts with a single step. Since 2005, the Leo Club of Sample City has walked a remarkable path of service, learning, and impact. Here is our story — told through moments that shaped us.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#0033A0] to-[#FFD700] hidden md:block" style={{ transform: 'translateX(-50%)' }} />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow card-hover">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-linear-to-br ${milestone.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-[#0033A0] text-white text-xs font-bold px-3 py-0.5 rounded-full">{milestone.year}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center year bullet */}
                <div className="hidden md:flex w-14 h-14 bg-[#0033A0] border-4 border-white shadow-xl rounded-full items-center justify-center shrink-0 z-10">
                  <span className="text-white text-xs font-black">{milestone.year.slice(2)}</span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Future vision */}
        <div className="mt-16 bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 text-white text-center">
          <Rocket className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
          <h2 className="text-3xl font-black font-display mb-3">The Journey Continues</h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            With every chapter year comes new challenges, new opportunities, and new lives to touch. We are committed to building on our legacy and reaching even greater heights in the years ahead. The best is yet to come.
          </p>
        </div>
      </div>
    </>
  );
}

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const posts = [
  {
    title: 'NOVA 25/26: A Leadership Journey Like No Other',
    date: 'March 10, 2026',
    author: 'Leo Nimesha Fernando',
    category: 'Events',
    excerpt: 'NOVA 25/26 exceeded every expectation. Over two days, 120 young leaders gathered to learn, grow, bond and commit themselves to a life of purposeful service...',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Harmonia: When Music Became Hope',
    date: 'February 2, 2026',
    author: 'Leo Piyumi Aberatne',
    category: 'Fundraiser',
    excerpt: 'On a rainy January evening, Sample City\'s largest auditorium was packed to capacity. But Harmonia was more than a concert — it was a testament to human compassion...',
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'How the Jala Aruna Project Changed 5 Villages',
    date: 'October 15, 2025',
    author: 'Leo Kavinda Jayawardena',
    category: 'Project',
    excerpt: 'Three years ago, families in five remote villages walked hours every day to collect drinking water. Today, thanks to Jala Aruna, clean water flows from taps in their homes...',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Sisu Nena 2025: 350 Students, One Dream',
    date: 'September 5, 2025',
    author: 'Leo Samantha Perera',
    category: 'Education',
    excerpt: 'Education is the greatest gift you can give a child. This year, Sisu Nena reached 350 students across 12 schools with school supplies, books and the promise of tomorrow...',
    color: 'from-purple-500 to-violet-600',
  },
  {
    title: 'What I Learned from Three Years as a Leo',
    date: 'August 1, 2025',
    author: 'Leo Rasith Bandara',
    category: 'Reflection',
    excerpt: 'When I joined the Leo Club three years ago, I thought I was joining a volunteer group. What I found was a family, a school, a movement, and a second home...',
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Suwa Wana: 5,000 Trees in a Single Day',
    date: 'July 12, 2025',
    author: 'Leo Devindi Herath',
    category: 'Environment',
    excerpt: 'At 6 AM, 300 volunteers gathered across 8 locations island-wide, shovels in hand and hope in their hearts. By sunset, 5,000 trees had been planted...',
    color: 'from-lime-500 to-green-500',
  },
];

const categoryColors: Record<string, string> = {
  Events: 'bg-blue-100 text-blue-700',
  Fundraiser: 'bg-amber-100 text-amber-700',
  Project: 'bg-cyan-100 text-cyan-700',
  Education: 'bg-purple-100 text-purple-700',
  Reflection: 'bg-emerald-100 text-emerald-700',
  Environment: 'bg-lime-100 text-lime-700',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Stories, reflections and updates from the heart of Leo Club of Sample City."
        breadcrumbs={[{ label: 'Projects' }, { label: 'Blog' }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Featured Post */}
        <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 md:p-14 text-white mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <span className="bg-[#FFD700] text-[#0033A0] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Featured</span>
            <h2 className="text-3xl md:text-4xl font-black font-display mt-5 mb-3">{posts[0].title}</h2>
            <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{posts[0].date}</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{posts[0].author}</span>
            </div>
            <p className="text-white/80 max-w-2xl leading-relaxed mb-6">{posts[0].excerpt}</p>
            <Link href="#" className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0033A0] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all text-sm">
              Read Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <article key={post.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover group">
              <div className={`h-2 bg-linear-to-r ${post.color}`} />
              {/* Card icon area */}
              <div className={`bg-linear-to-br ${post.color} h-40 flex items-center justify-center`}>
                <BookOpen className="w-12 h-12 text-white/60" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>{post.category}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-[#0033A0] transition-colors">{post.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1"><User className="w-3 h-3" />{post.author.replace('Leo ', '')}</span>
                  <Link href="#" className="text-[#0033A0] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

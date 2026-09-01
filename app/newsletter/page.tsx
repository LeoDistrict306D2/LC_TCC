import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Download, FileText, Calendar, ArrowRight } from 'lucide-react';

const newsletters = [
  { title: 'The Leo Voice – Vol. IX | Issue 03', date: 'January 2026', size: '3.2 MB', description: 'Recap of Q3 events including Harmonia charity concert, new leadership spotlight, and upcoming project announcements.', featured: true },
  { title: 'The Leo Voice – Vol. IX | Issue 02', date: 'October 2025', size: '2.8 MB', description: 'Highlights of the Inter-Leo Debate Championship, member achievements and district news.' },
  { title: 'The Leo Voice – Vol. IX | Issue 01', date: 'July 2025', size: '3.5 MB', description: 'Chapter installation report, NOVA leadership summit review and the new board introduction.' },
  { title: 'The Leo Voice – Vol. VIII | Issue 03', date: 'January 2025', size: '2.9 MB', description: 'Sisu Nena education drive results, blood donation camp recap and year-end awards ceremony.' },
  { title: 'The Leo Voice – Vol. VIII | Issue 02', date: 'October 2024', size: '3.1 MB', description: 'Mid-year project updates, Jala Aruna water project expansion, and district event coverage.' },
  { title: 'The Leo Voice – Vol. VIII | Issue 01', date: 'July 2024', size: '2.7 MB', description: 'New chapter year kickoff, newly installed board profiles, and vision statement for 2024/25.' },
  { title: 'The Leo Voice – Vol. VII | Issue 03', date: 'January 2024', size: '2.5 MB', description: 'Year achievements digest, award celebrations and messages from the outgoing president.' },
  { title: 'The Leo Voice – Vol. VII | Issue 02', date: 'October 2023', size: '2.4 MB', description: 'Community outreach highlights, environmental campaign results and fellowship event photos.' },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        title="Newsletter"
        subtitle="Download our latest editions of The Leo Voice — our official club newsletter."
        breadcrumbs={[{ label: 'Downloads' }, { label: 'Newsletter' }]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Featured Newsletter */}
        <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 md:p-14 text-white mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <span className="bg-[#FFD700] text-[#0033A0] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Latest Issue</span>
              <h2 className="text-3xl font-black font-display mt-4 mb-2">{newsletters[0].title}</h2>
              <p className="text-white/70 text-sm mb-2">Published: {newsletters[0].date} · {newsletters[0].size}</p>
              <p className="text-white/80 max-w-xl leading-relaxed">{newsletters[0].description}</p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#FFD700] text-[#0033A0] font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-lg"
            >
              <Download className="w-5 h-5" /> Download PDF
            </a>
          </div>
        </div>

        {/* Archives */}
        <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Newsletter Archive</h2>
        <div className="space-y-4">
          {newsletters.slice(1).map((nl) => (
            <div key={nl.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#0033A0] transition-colors duration-300">
                  <FileText className="w-6 h-6 text-[#0033A0] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#0033A0] transition-colors">{nl.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{nl.date}</span>
                    <span>{nl.size}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{nl.description}</p>
                </div>
              </div>
              <a href="#" className="flex items-center gap-2 text-[#0033A0] text-sm font-bold border-2 border-[#0033A0] px-5 py-2.5 rounded-full hover:bg-[#0033A0] hover:text-white transition-all duration-300 whitespace-nowrap">
                <Download className="w-4 h-4" /> Download
              </a>
            </div>
          ))}
        </div>

        {/* Subscribe banner */}
        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-black text-gray-900 font-display mb-3">Subscribe to The Leo Voice</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">Get our newsletter delivered to your inbox the moment a new issue is published.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" />
            <button className="flex items-center justify-center gap-2 bg-[#0033A0] text-white font-bold px-6 py-3 rounded-full hover:bg-[#001f6b] transition-colors text-sm">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

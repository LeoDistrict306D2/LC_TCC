import PageHeader from '@/components/PageHeader';
import { Download, Users, FileText } from 'lucide-react';

const committees = [
  { name: 'Executive Committee', count: 8 },
  { name: 'Chief Coordinators', count: 6 },
  { name: 'Director Board', count: 18 },
  { name: 'Editorial Panel', count: 6 },
  { name: 'IT & PR Panel', count: 6 },
  { name: 'Activity Coordinators', count: 5 },
];

export default function DirectoryPage() {
  return (
    <>
      <PageHeader
        title="Club Directory 2025/26"
        subtitle="The complete membership directory for the Leo Club of Sample City chapter year 2025/26."
        breadcrumbs={[{ label: 'Downloads' }, { label: 'Club Directory 2025/26' }]}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* Download hero */}
        <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-28 bg-white/10 border border-white/20 rounded-xl flex flex-col items-center justify-center gap-2 shrink-0">
              <FileText className="w-10 h-10 text-[#FFD700]" />
              <span className="text-white/60 text-xs">PDF</span>
              <span className="text-white/40 text-[10px]">4.2 MB</span>
            </div>
            <div>
              <h2 className="text-3xl font-black font-display mb-2">Club Directory 2025/26</h2>
              <p className="text-white/70 mb-2 text-sm">Complete member contact directory for the current chapter year including all committees, portfolios and contact information.</p>
              <p className="text-white/50 text-xs mb-6">Note: This document contains personal contact information. Treat it as confidential and do not share with non-members.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0033A0] font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              >
                <Download className="w-5 h-5" /> Download Directory
              </a>
            </div>
          </div>
        </div>

        {/* Directory Overview */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Directory Overview</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {committees.map((c) => (
              <div key={c.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-hover text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-7 h-7 text-[#0033A0]" />
                </div>
                <div className="text-3xl font-black text-[#0033A0] mb-1">{c.count}</div>
                <div className="text-gray-600 font-medium text-sm">{c.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Directories */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-6">Past Directories</h2>
          <div className="space-y-3">
            {['2024/25', '2023/24', '2022/23', '2021/22', '2020/21'].map((year) => (
              <div key={year} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-6 py-4">
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-[#0033A0]" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Club Directory {year}</div>
                    <div className="text-gray-400 text-xs">Leo Club of Sample City</div>
                  </div>
                </div>
                <a href="#" className="flex items-center gap-2 text-[#0033A0] text-sm font-bold border border-[#0033A0] px-4 py-2 rounded-full hover:bg-[#0033A0] hover:text-white transition-all duration-300">
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

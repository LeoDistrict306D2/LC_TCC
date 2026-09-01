import PageHeader from '@/components/PageHeader';
import { Trophy, Star } from 'lucide-react';

const pastLeaders = [
  { year: '2024/25', president: 'Leo David Karunarathna', secretary: 'Leo Amandhi Disanayake', treasurer: 'Leo Nimal Perera' },
  { year: '2023/24', president: 'Leo Buddika Seneviratne', secretary: 'Leo Pubudu Jayawardena', treasurer: 'Leo Kasun Rathnayaka' },
  { year: '2022/23', president: 'Leo Harini Wickrama', secretary: 'Leo Lahiru Bandara', treasurer: 'Leo Sachini Pathirana' },
  { year: '2021/22', president: 'Leo Ruwan Fernando', secretary: 'Leo Thilini Dias', treasurer: 'Leo Prasad Gunasekara' },
  { year: '2020/21', president: 'Leo Nadee Wijesinghe', secretary: 'Leo Shanaka Mendis', treasurer: 'Leo Dilrukshi Perera' },
  { year: '2019/20', president: 'Leo Chaminda Abeyratne', secretary: 'Leo Renuka Herath', treasurer: 'Leo Gihan Senanayake' },
  { year: '2018/19', president: 'Leo Priya Rajakaruna', secretary: 'Leo Asanka Wickramasinghe', treasurer: 'Leo Ruvini Jayasinghe' },
  { year: '2017/18', president: 'Leo Supun Kumara', secretary: 'Leo Maduka Fernando', treasurer: 'Leo Nimali Samaraweera' },
  { year: '2016/17', president: 'Leo Chathura Marasinghe', secretary: 'Leo Dinusha Amarasinghe', treasurer: 'Leo Jeewani Peiris' },
  { year: '2015/16', president: 'Leo Ishara Jayakody', secretary: 'Leo Sampath Rathnasiri', treasurer: 'Leo Niluka Subasinghe' },
  { year: '2014/15', president: 'Leo Tharaka Gamage', secretary: 'Leo Maneesha Kuruppu', treasurer: 'Leo Lasantha Fonseka' },
  { year: '2013/14', president: 'Leo Nuwan Dissanayake', secretary: 'Leo Shanali Wickramasinghe', treasurer: 'Leo Amal Karunanayake' },
  { year: '2012/13', president: 'Leo Hasini Parakrama', secretary: 'Leo Ravindu Dahanayake', treasurer: 'Leo Malka Jayarathna' },
  { year: '2011/12', president: 'Leo Ruchira Jayaweera', secretary: 'Leo Sumatha Ranasinghe', treasurer: 'Leo Pavithra Amarasekara' },
  { year: '2010/11', president: 'Leo Thusitha Mahesh', secretary: 'Leo Nayanathara Senanayake', treasurer: 'Leo Chanaka Liyanage' },
  { year: '2009/10', president: 'Leo Sanjeewa Weeratunga', secretary: 'Leo Dilhari Rodrigo', treasurer: 'Leo Basil Jayasinghe' },
  { year: '2008/09', president: 'Leo Udaya Nanayakkara', secretary: 'Leo Chamila Seneviratne', treasurer: 'Leo Paboda Rajapaksha' },
  { year: '2007/08', president: 'Leo Sisira Gunawardena', secretary: 'Leo Kamani Dharmaratne', treasurer: 'Leo Senaka Jayawardana' },
  { year: '2006/07', president: 'Leo Malinda Karunarathna', secretary: 'Leo Jayamini Wickrama', treasurer: 'Leo Hasanka Perera' },
  { year: '2005/06', president: 'Leo Arjuna Bandara', secretary: 'Leo Dilani Jayasekara', treasurer: 'Leo Kasun Fonseka' },
];

export default function PastLeadersPage() {
  return (
    <>
      <PageHeader
        title="Past Leaders"
        subtitle="Celebrating two decades of exceptional leadership that built the foundation of our club."
        breadcrumbs={[{ label: 'Leo Club SC' }, { label: 'Past Leaders' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro banner */}
        <div className="bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <Trophy className="w-12 h-12 text-[#FFD700] mb-4" />
          <h2 className="text-3xl font-black font-display mb-2">A Legacy of Leadership</h2>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Since our founding in 2005, Leo Club of Sample City has been shaped by remarkable young leaders who dedicated their time, energy and passion to serve others. We honour their contributions and the legacy they built.
          </p>
        </div>

        {/* Leaders table */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0033A0] text-white">
                  <th className="text-left px-6 py-4 text-sm font-bold">Chapter Year</th>
                  <th className="text-left px-6 py-4 text-sm font-bold">President</th>
                  <th className="text-left px-6 py-4 text-sm font-bold">Secretary</th>
                  <th className="text-left px-6 py-4 text-sm font-bold">Treasurer</th>
                </tr>
              </thead>
              <tbody>
                {pastLeaders.map((leader, i) => (
                  <tr
                    key={leader.year}
                    className={`border-b border-gray-50 hover:bg-blue-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="px-6 py-4">
                      <span className="bg-[#0033A0] text-white text-xs font-bold px-3 py-1 rounded-full">{leader.year}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#0033A0] rounded-full flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{leader.president.split(' ')[1][0]}</span>
                        </div>
                        <span className="text-sm text-gray-800 font-medium">{leader.president}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{leader.secretary}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{leader.treasurer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { val: '20+', label: 'Chapter Years' },
            { val: '20+', label: 'Past Presidents' },
            { val: '1200+', label: 'Projects Completed' },
            { val: '15000+', label: 'Lives Impacted' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-[#0033A0] mb-1">{s.val}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

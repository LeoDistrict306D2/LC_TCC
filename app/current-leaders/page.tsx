import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

/**
 * Real executive committee, 2026/27 — from the club's own EXCO spreadsheet
 * and official photographs. Two members (both Assistant Secretary /
 * Assistant Treasurer entries below without a `photo`) don't have a photo on
 * file yet and render an initials fallback instead.
 */
const executiveCommittee = [
  { name: 'Leo Denuwan Chamath', role: 'President', photo: 'denuwan-chamath.jpg' },
  { name: 'Leo Sanija Indeepa', role: 'Immediate Past Club President', photo: 'sanija-indeepa.jpg' },
  { name: 'Leo Runithi Nuwanma', role: '1st Vice President', photo: 'runithi-nuwanma.jpg' },
  { name: 'Leo Hesandu Sathiraka', role: '2nd Vice President', photo: 'hesandu-sathiraka.jpg' },
  { name: 'Leo Pulathi Liyansa', role: 'Club Secretary', photo: 'pulathi-liyansa.jpg' },
  { name: 'Leo Thenuki Thimasha', role: 'Club Treasurer', photo: 'thenuki-thimasha.jpg' },
  { name: 'Leo Bihanga Romindi', role: 'Assistant Secretary', photo: 'bihanga-romindi.jpg' },
  { name: 'Leo Methuli Lesadi', role: 'Assistant Secretary', photo: null },
  { name: 'Leo Diluni Kaveesha', role: 'Assistant Treasurer', photo: null },
  { name: 'Leo Budhitha Sathnindu', role: 'Chief Editor', photo: 'budhitha-sathnindu.jpg' },
];

function initials(name: string) {
  const words = name.split(/\s+/).filter((w) => w.toLowerCase() !== 'leo');
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function CurrentLeadersPage() {
  return (
    <>
      <PageHeader
        title="Current Leaders"
        subtitle="Meet the Executive Committee leading the Leo Club of Taxila Central College for the 2026/27 chapter year."
        breadcrumbs={[{ label: 'Leo Club TCC' }, { label: 'Current Leaders' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#0033A0] rounded-full" />
            <h2 className="text-2xl font-black text-gray-900 font-display">Executive Committee</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {executiveCommittee.map((officer) => (
              <div
                key={officer.name}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-hover group"
              >
                {officer.photo ? (
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={`/images/board/${officer.photo}`}
                      alt={officer.name}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] w-full bg-linear-to-br from-[#0033A0] to-[#001f6b] flex items-center justify-center">
                    <span className="text-white font-black text-3xl">{initials(officer.name)}</span>
                  </div>
                )}
                <div className="p-4 text-center">
                  <div className="text-[#0033A0] text-xs font-bold uppercase tracking-wider mb-1">
                    {officer.role}
                  </div>
                  <div className="text-gray-800 font-semibold text-sm">{officer.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

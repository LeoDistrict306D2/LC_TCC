import PageHeader from '@/components/PageHeader';

const colorVersions = [
  { bg: 'bg-white border-2 border-gray-200', badge: 'bg-[#0033A0]', badgeText: 'white', name: 'Full Color', desc: 'Primary version for use on white/light backgrounds.' },
  { bg: 'bg-[#0033A0]', badge: 'bg-white', badgeText: '#0033A0', name: 'Reverse (White)', desc: 'Used on blue/dark backgrounds.' },
  { bg: 'bg-gray-900', badge: 'bg-[#FFD700]', badgeText: '#0033A0', name: 'Gold on Dark', desc: 'Alternate dark theme version.' },
  { bg: 'bg-gray-100 border border-gray-200', badge: 'bg-gray-700', badgeText: 'white', name: 'Monochrome', desc: 'For use where color is unavailable.' },
];

const usageGuidelines = [
  { rule: '✅ Do', items: ['Use the logo on approved backgrounds only', 'Maintain minimum clear space around the logo', 'Use the correct version for the background', 'Scale proportionally when resizing'] },
  { rule: '❌ Don\'t', items: ['Stretch or distort the logo', 'Alter the club name or tagline', 'Use unapproved color combinations', 'Add effects such as drop shadows or gradients'] },
];

export default function ClubLogoPage() {
  return (
    <>
      <PageHeader
        title="Club Logo"
        subtitle="Brand identity guidelines and logo usage standards for the Leo Club of Sample City."
        breadcrumbs={[{ label: 'Leo Club SC' }, { label: 'Club Logo' }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Primary Logo Display */}
        <section className="text-center">
          <h2 className="text-2xl font-black text-gray-900 font-display mb-8">Our Primary Logo</h2>
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-16 shadow-sm inline-flex flex-col items-center">
            {/* Logo SVG */}
            <div className="w-48 h-48 bg-linear-to-br from-[#0033A0] to-[#001f6b] rounded-full flex items-center justify-center shadow-2xl mb-6">
              <div className="text-center">
                <div className="text-[#FFD700] font-black text-6xl leading-none">LC</div>
                <div className="text-white/80 text-xs font-bold mt-1 tracking-[0.3em]">2005</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[#0033A0] font-black text-3xl tracking-wide font-display">LEO CLUB</div>
              <div className="text-gray-500 text-sm font-semibold tracking-[0.4em] mt-1 uppercase">of Sample City</div>
              <div className="w-16 h-0.5 bg-[#FFD700] mx-auto mt-3 mb-3" />
              <div className="text-gray-400 text-xs tracking-widest uppercase">Leadership · Experience · Opportunity</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Established 2005 · District 306 D2</p>
        </section>

        {/* Logo Variations */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-8">Logo Variations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorVersions.map((v) => (
              <div key={v.name} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className={`${v.bg} p-10 flex items-center justify-center`}>
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg`}
                    style={{ background: v.badge === 'bg-white' ? 'white' : v.badge === 'bg-[#0033A0]' ? '#0033A0' : v.badge === 'bg-[#FFD700]' ? '#FFD700' : '#374151' }}
                  >
                    <span
                      className="font-black text-2xl"
                      style={{ color: v.badgeText === 'white' ? 'white' : v.badgeText }}
                    >LC</span>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="font-bold text-gray-900 text-sm">{v.name}</div>
                  <div className="text-gray-400 text-xs mt-1">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Colors */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-8">Brand Colors</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { color: '#0033A0', name: 'Leo Blue', hex: '#0033A0', rgb: 'RGB(0, 51, 160)' },
              { color: '#FFD700', name: 'Leo Gold', hex: '#FFD700', rgb: 'RGB(255, 215, 0)' },
              { color: '#001f6b', name: 'Deep Navy', hex: '#001f6b', rgb: 'RGB(0, 31, 107)' },
              { color: '#0a0f1e', name: 'Dark Blue', hex: '#0a0f1e', rgb: 'RGB(10, 15, 30)' },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="h-24" style={{ backgroundColor: c.color }} />
                <div className="p-4">
                  <div className="font-bold text-gray-900 text-sm">{c.name}</div>
                  <div className="text-gray-400 text-xs mt-1 font-mono">{c.hex}</div>
                  <div className="text-gray-400 text-xs font-mono">{c.rgb}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-8">Typography</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Primary Font – Display</div>
              <div className="text-5xl font-black text-gray-900 font-display mb-2">Playfair Display</div>
              <div className="text-gray-500 text-sm">Used for headings, hero text, and impact statements.</div>
              <div className="mt-4 space-y-1">
                {['H1 – 60px / Black', 'H2 – 48px / Black', 'H3 – 32px / Bold'].map((s) => (
                  <div key={s} className="text-gray-400 text-xs font-mono">{s}</div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Body Font – Sans Serif</div>
              <div className="text-5xl font-black text-gray-900 mb-2">Inter</div>
              <div className="text-gray-500 text-sm">Used for body text, navigation, buttons, and labels.</div>
              <div className="mt-4 space-y-1">
                {['Body – 16px / Regular', 'Small – 14px / Medium', 'Label – 12px / Bold'].map((s) => (
                  <div key={s} className="text-gray-400 text-xs font-mono">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 font-display mb-8">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usageGuidelines.map((g) => (
              <div key={g.rule} className={`rounded-2xl p-8 ${g.rule.startsWith('✅') ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                <h3 className="font-bold text-lg mb-4">{g.rule}</h3>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${g.rule.startsWith('✅') ? 'bg-green-500' : 'bg-red-500'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

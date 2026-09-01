import PageHeader from '@/components/PageHeader';
import { Map, Navigation } from 'lucide-react';

export default function NavigationPage() {
  return (
    <>
      <PageHeader
        title="Leo Navigation Map"
        subtitle="Interactive map showing all Leo Club projects and service locations across the region."
        breadcrumbs={[{ label: 'Projects' }, { label: 'Leo Navigation Map' }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          {/* Map placeholder */}
          <div className="bg-linear-to-br from-gray-100 to-blue-50 h-[500px] flex flex-col items-center justify-center text-center gap-5">
            <div className="w-20 h-20 bg-[#0033A0] rounded-full flex items-center justify-center shadow-xl">
              <Map className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 font-display mb-2">Interactive Project Map</h2>
              <p className="text-gray-500 text-sm max-w-md">
                This interactive map displays all service project locations of the Leo Club of Sample City. The live map is powered by an external mapping service.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#0033A0] text-white font-bold px-8 py-4 rounded-full hover:bg-[#001f6b] transition-all duration-300 shadow-lg hover:scale-105 text-sm"
            >
              <Navigation className="w-4 h-4" /> Open Live Map
            </a>
          </div>
          {/* Region legend */}
          <div className="p-8 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { region: 'Sample City Central', projects: 48, color: 'bg-blue-500' },
              { region: 'Sample North', projects: 32, color: 'bg-emerald-500' },
              { region: 'Sample South', projects: 27, color: 'bg-amber-500' },
              { region: 'Rural Outreach Zones', projects: 41, color: 'bg-purple-500' },
            ].map((r) => (
              <div key={r.region} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <div className={`w-3 h-3 ${r.color} rounded-full shrink-0`} />
                <div>
                  <div className="text-sm font-semibold text-gray-800">{r.region}</div>
                  <div className="text-xs text-gray-400">{r.projects} projects</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

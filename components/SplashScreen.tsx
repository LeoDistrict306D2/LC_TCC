/**
 * Entry splash, built from the same navy-gradient / gold-roundel / orbit-dot
 * motif already used in the homepage hero. Pure CSS — no client JS — so it
 * degrades correctly with JavaScript off.
 */
export default function SplashScreen() {
  return (
    <div
      aria-hidden="true"
      className="splash-screen hero-gradient fixed inset-0 z-80 flex items-center justify-center"
    >
      <div className="splash-rise flex flex-col items-center text-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#FFD700]/30">
          <div className="splash-orbit absolute inset-0">
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute h-2.5 w-2.5 rounded-full bg-[#FFD700]"
                style={{ top: '50%', left: '50%', transform: `rotate(${deg}deg) translateX(58px) translateY(-50%)` }}
              />
            ))}
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-[#FFD700] to-[#FFA500] shadow-2xl shadow-yellow-500/30">
            <span className="text-2xl font-black text-[#0033A0]">LC</span>
          </div>
        </div>

        <h1 className="mt-6 text-2xl font-black text-white font-display">LEO CLUB</h1>
        <h2 className="gold-text text-xl font-black font-display">OF TAXILA CENTRAL COLLEGE</h2>
        <p className="mt-3 text-xs tracking-[0.3em] text-white/50 uppercase">Leadership · Experience · Opportunity</p>

        <div className="mt-7 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="splash-bar-fill h-full rounded-full bg-[#FFD700]" />
        </div>
      </div>
    </div>
  );
}

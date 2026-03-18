export default function WeekendDinnerMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-white/90">
          Dinner Menu
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        <p className="text-sm md:text-base text-white/60 mt-3">Weekend</p>
        {/* hours slot — uncomment when ready */}
        {/* <p className="text-xs text-gold/70 mt-1">Sat–Sun · 5:00pm – close</p> */}
      </div>
      <div className="mt-12 max-w-md mx-auto text-center border border-white/5 rounded-sm p-10 bg-white/[0.02]">
        <p className="text-white/40 text-sm tracking-wide">Menu coming soon</p>
      </div>
    </section>
  );
}

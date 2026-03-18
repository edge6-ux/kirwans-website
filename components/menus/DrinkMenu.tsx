export default function DrinkMenu() {
  return (
    <section className="bg-[#050608] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2
          className="text-5xl md:text-6xl text-[#C9A86A]"
          style={{ fontFamily: "var(--font-great-vibes, cursive)" }}
        >
          Drinks
        </h2>
        <div className="mt-3 mx-auto h-px w-16 bg-gold/60" />
        {/* hours slot — uncomment when ready */}
        {/* <p className="text-xs text-gold/70 mt-3">Available during all service hours</p> */}
      </div>
      <div className="mt-12 max-w-md mx-auto text-center border border-white/5 rounded-sm p-10 bg-white/[0.02]">
        <p className="text-white/40 text-sm tracking-wide">Menu coming soon</p>
      </div>
    </section>
  );
}

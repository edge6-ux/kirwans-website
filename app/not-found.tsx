import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] flex flex-col items-center justify-center px-6 text-center">

      {/* Gold ornament */}
      <div className="flex items-center gap-4 mb-8">
        <span className="block h-[1px] w-16 bg-[#C9A86A]/30" />
        <span className="text-[#C9A86A]/50 text-lg">☘</span>
        <span className="block h-[1px] w-16 bg-[#C9A86A]/30" />
      </div>

      {/* 404 */}
      <p
        className="text-[8rem] md:text-[12rem] leading-none font-normal mb-2 select-none"
        style={{
          fontFamily: "var(--font-great-vibes, cursive)",
          color: "rgba(255,255,255,0.06)",
          WebkitTextStroke: "1px rgba(201,168,106,0.2)",
        }}
        aria-hidden="true"
      >
        404
      </p>

      <h1
        className="text-3xl md:text-4xl font-serif text-white/85 tracking-wide -mt-6 mb-4"
      >
        Lost on the Wharf?
      </h1>

      <p className="text-white/45 text-sm md:text-base max-w-sm leading-relaxed mb-10">
        The page you're looking for doesn't exist — but a cold pint and a warm
        seat are always waiting for you at Kirwan's.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/" size="lg">Back to Home</Button>
        <Button href="/menu" variant="outline" size="lg">View the Menu</Button>
      </div>

      {/* Bottom gold line */}
      <div className="mt-16">
        <Link
          href="/contact"
          className="text-xs uppercase tracking-widest text-white/25 hover:text-[#C9A86A] transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}

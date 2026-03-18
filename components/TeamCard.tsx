import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  hometown?: string;
}

export default function TeamCard({ name, role, bio, imageSrc, hometown }: TeamCardProps) {
  return (
    <article className="group flex flex-col items-center text-center">

      {/* Portrait */}
      <div className="relative w-52 h-52 mb-6 overflow-hidden rounded-full border-2 border-[#C9A86A]/30 group-hover:border-[#C9A86A] transition-all duration-500 shadow-[0_0_0_6px_rgba(201,168,106,0.06)] group-hover:shadow-[0_0_0_8px_rgba(201,168,106,0.14),0_0_32px_rgba(15,95,63,0.25)]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="208px"
        />
        <div className="absolute inset-0 bg-[#0B0B0C]/20 group-hover:bg-transparent transition-all duration-500" />
      </div>

      {/* Info */}
      <p className="section-label mb-1">{role}</p>
      <h3
        className="text-[#C9A86A] text-2xl mb-1"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {name}
      </h3>
      {hometown && (
        <p className="text-[#C7C7C7]/70 text-xs tracking-wide mb-4">{hometown}</p>
      )}

      {/* Gold divider */}
      <div className="w-8 h-[1px] bg-[#C9A86A]/50 mb-4" />

      <p className="text-[#C7C7C7] text-sm leading-relaxed max-w-xs">{bio}</p>
    </article>
  );
}

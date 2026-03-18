import Image from "next/image";

interface DishCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  tag?: string;
}

export default function DishCard({ name, description, price, imageSrc, tag }: DishCardProps) {
  return (
    <article className="group relative bg-[#111214] border border-[#1C1C1E] overflow-hidden hover:border-t-[#C9A86A] hover:border-[#C9A86A]/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(15,95,63,0.25)]">

      {/* Gold top border reveal on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A86A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent" />

        {tag && (
          <span className="absolute top-4 right-4 bg-[#C9A86A] text-[#0B0B0C] text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-[#C9A86A] text-xl leading-snug"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {name}
          </h3>
          <span className="text-[#C9A86A] font-semibold text-sm whitespace-nowrap shrink-0 mt-0.5">
            {price}
          </span>
        </div>
        <p className="text-[#C7C7C7] text-sm leading-relaxed">{description}</p>

        {/* Animated bottom line */}
        <div className="mt-5 h-[1px] w-0 bg-[#C9A86A]/40 group-hover:w-full transition-all duration-500" />
      </div>
    </article>
  );
}

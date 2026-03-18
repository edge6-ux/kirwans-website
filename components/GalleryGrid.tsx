import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div
          key={i}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg bg-[#111214]"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/45 transition-all duration-500 rounded-lg" />

          {/* Caption slide up */}
          {img.caption && (
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#0B0B0C] to-transparent rounded-b-lg">
              <p className="text-[#C9A86A] text-xs tracking-widest uppercase font-semibold">
                {img.caption}
              </p>
            </div>
          )}

          {/* Gold corner accents on hover */}
          <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C9A86A]/0 group-hover:border-[#C9A86A]/70 transition-all duration-500 rounded-tl" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C9A86A]/0 group-hover:border-[#C9A86A]/70 transition-all duration-500 rounded-br" />
        </div>
      ))}
    </div>
  );
}

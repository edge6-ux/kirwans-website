interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** "dark" = #0B0B0C (blackBase) | "medium" = #111214 (blackSurface) | "light" = #0F5F3F (emerald) */
  bg?: "dark" | "medium" | "light";
}

const bgMap = {
  dark:   "bg-[#0B0B0C]",
  medium: "bg-[#111214]",
  light:  "bg-[#0F5F3F]",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "dark",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgMap[bg]} py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Reusable section heading block */
export function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
}: {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  const align = center ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${align} mb-14`}>
      <span className="section-label mb-3">{label}</span>
      <span className="brass-divider" />
      <h2
        className="font-serif text-4xl md:text-5xl text-[#F5F5F5] leading-tight mt-2"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-[#C7C7C7] text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

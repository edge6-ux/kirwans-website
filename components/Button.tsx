import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase text-xs transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0C] disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  // Primary: emerald bg, white text → gold glow on hover
  primary:
    "bg-[#062518] text-[#F5F5F5] hover:bg-[#0A3D28] hover:shadow-[0_0_28px_rgba(6,37,24,0.6)]",
  // Outline: gold border + text → gold bg + black text on hover
  outline:
    "border border-[#C9A86A] text-[#C9A86A] hover:bg-[#C9A86A] hover:text-[#0B0B0C] hover:shadow-[0_0_20px_rgba(201,168,106,0.25)]",
  // Ghost: gold text, underline on hover
  ghost:
    "text-[#C9A86A] hover:text-[#D9C08A] underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[0.65rem]",
  md: "px-8 py-3",
  lg: "px-10 py-4 text-[0.75rem]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

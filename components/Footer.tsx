import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/about",   label: "About"   },
  { href: "/menu",    label: "Menu"    },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "Monday – Thursday", time: "11 AM – 2 AM" },
  { day: "Friday – Saturday",  time: "11 AM – 3 AM" },
  { day: "Sunday",             time: "11 AM – 2 AM" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] border-t border-[#C9A86A]/15">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-5 transition-opacity duration-300 hover:opacity-80">
            <Image
              src="/images/logo.webp"
              alt="Kirwan's on the Wharf logo"
              height={40}
              width={134}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-[#C7C7C7] text-sm leading-relaxed mb-6">
            An authentic Irish pub & restaurant bringing the warmth of Dublin
            to the heart of Washington D.C.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/kirwansonthewharf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kirwan's Instagram"
              className="w-9 h-9 border border-[#C9A86A]/30 text-[#C9A86A] flex items-center justify-center hover:bg-[#C9A86A] hover:text-[#0B0B0C] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/kirwansonthewharf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kirwan's Facebook"
              className="w-9 h-9 border border-[#C9A86A]/30 text-[#C9A86A] flex items-center justify-center hover:bg-[#C9A86A] hover:text-[#0B0B0C] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="section-label mb-5">Navigate</h4>
          <ul className="space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[#C7C7C7] text-sm hover:text-[#1FAF6B] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="section-label mb-5">Hours</h4>
          <ul className="space-y-3">
            {hours.map(({ day, time }) => (
              <li key={day} className="text-sm">
                <span className="block text-[#F5F5F5]">{day}</span>
                <span className="text-[#C7C7C7]">{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="section-label mb-5">Find Us</h4>
          <address className="not-italic space-y-2 text-sm text-[#C7C7C7]">
            <p className="text-[#F5F5F5]">749 Wharf Street SW</p>
            <p>Washington, DC 20024</p>
            <p className="mt-4">
              <a href="tel:+12025550192" className="hover:text-[#C9A86A] transition-colors">
                (202) 555-0192
              </a>
            </p>
            <p>
              <a href="mailto:hello@kirwansdc.com" className="hover:text-[#C9A86A] transition-colors">
                hello@kirwansdc.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#C7C7C7]/50 text-xs tracking-wide">
            © {new Date().getFullYear()} Kirwan&#39;s Irish Pub & Restaurant. All rights reserved.
          </p>
          <p className="text-[#C7C7C7]/50 text-xs tracking-wide">
            Washington D.C. · Est. 2018
          </p>
        </div>
      </div>
    </footer>
  );
}

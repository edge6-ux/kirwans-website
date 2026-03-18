import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Kirwan's Irish Pub & Restaurant",
  description:
    "Contact Kirwan's at 749 Wharf Street SW, Washington D.C. View our hours, get directions, and get in touch.",
};

const hours = [
  { day: "Monday",           open: "11 AM", close: "2 AM"  },
  { day: "Tuesday",          open: "11 AM", close: "2 AM"  },
  { day: "Wednesday",        open: "11 AM", close: "2 AM"  },
  { day: "Thursday",         open: "11 AM", close: "2 AM"  },
  { day: "Friday",           open: "11 AM", close: "3 AM"  },
  { day: "Saturday",         open: "11 AM", close: "3 AM"  },
  { day: "Sunday",           open: "11 AM", close: "2 AM"  },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function ContactPage() {
  return (
    <>
      <Hero
        imageSrc="/images/pub-interior.svg"
        label="Get in Touch"
        title="Contact Kirwan's"
        subtitle="We're in the heart of D.C. — come find us, or reach out and we'll find you."
        size="half"
        overlayOpacity={0.72}
        cursiveTitleGold
      />

      {/* Hours + Address */}
      <SectionWrapper bg="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Hours */}
          <div className="lg:col-span-1">
            <SectionHeading label="When We're Open" title="Hours" center={false} />
            <table className="w-full text-sm">
              <tbody>
                {hours.map(({ day, open, close }) => {
                  const isToday = day === today;
                  return (
                    <tr
                      key={day}
                      className={`border-b border-[#C9A86A]/10 last:border-0 ${
                        isToday ? "text-[#C9A86A]" : ""
                      }`}
                    >
                      <td className="py-3 font-medium">
                        {day}
                        {isToday && (
                          <span className="ml-2 text-[0.6rem] uppercase tracking-widest text-[#C9A86A] bg-[#C9A86A]/10 px-2 py-0.5">
                            Today
                          </span>
                        )}
                      </td>
                      <td className={`py-3 text-right ${isToday ? "text-[#C9A86A]" : "text-[#C7C7C7]"}`}>
                        {open} – {close}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Address + Contact */}
          <div className="lg:col-span-1">
            <SectionHeading label="Where to Find Us" title="Location" center={false} />
            <address className="not-italic space-y-4 text-sm">
              <div>
                <p className="text-[#C9A86A] text-xs tracking-widest uppercase font-semibold mb-1">Address</p>
                <p className="text-[#F5F5F5]">749 Wharf Street SW</p>
                <p className="text-[#C7C7C7]">Washington, DC 20024</p>
              </div>
              <div>
                <p className="text-[#C9A86A] text-xs tracking-widest uppercase font-semibold mb-1">Phone</p>
                <a
                  href="tel:+12025550192"
                  className="text-[#F5F5F5] hover:text-[#C9A86A] transition-colors"
                >
                  (202) 555-0192
                </a>
              </div>
              <div>
                <p className="text-[#C9A86A] text-xs tracking-widest uppercase font-semibold mb-1">Email</p>
                <a
                  href="mailto:hello@kirwansdc.com"
                  className="text-[#F5F5F5] hover:text-[#C9A86A] transition-colors"
                >
                  hello@kirwansdc.com
                </a>
              </div>
              <div>
                <p className="text-[#C9A86A] text-xs tracking-widest uppercase font-semibold mb-1">Private Events</p>
                <a
                  href="mailto:events@kirwansdc.com"
                  className="text-[#F5F5F5] hover:text-[#C9A86A] transition-colors"
                >
                  events@kirwansdc.com
                </a>
              </div>
            </address>
          </div>

        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper bg="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeading label="Get in Touch" title="Send Us a Message" center={false} />
            <p className="text-[#C7C7C7] text-sm leading-relaxed mb-4">
              Whether you have a question about our menu, want to enquire about private events, or
              just want to say hello — we&apos;d love to hear from you.
            </p>
            <p className="text-[#C7C7C7] text-sm leading-relaxed">
              We typically respond within one business day.
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Kirwan's Irish Pub & Restaurant",
  description:
    "Contact Kirwan's at 749 Wharf Street SW, Washington D.C. View our hours, get directions, and get in touch.",
};

const kitchenHours = [
  {
    days: "Monday – Thursday",
    weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    periods: [
      { label: "Lunch",      time: "11 AM – 3 PM"  },
      { label: "Dinner",     time: "3 PM – 10 PM"  },
      { label: "Late Night", time: "10 PM – 12 AM" },
    ],
  },
  {
    days: "Friday",
    weekdays: ["Friday"],
    periods: [
      { label: "Lunch",      time: "11 AM – 3 PM"    },
      { label: "Dinner",     time: "3 PM – 10 PM"    },
      { label: "Late Night", time: "10 PM – 1:30 AM" },
    ],
  },
  {
    days: "Saturday",
    weekdays: ["Saturday"],
    periods: [
      { label: "Brunch",     time: "11 AM – 3 PM"    },
      { label: "Dinner",     time: "3:30 PM – 10 PM" },
      { label: "Late Night", time: "10 PM – 1:30 AM" },
    ],
  },
  {
    days: "Sunday",
    weekdays: ["Sunday"],
    periods: [
      { label: "Brunch",     time: "11 AM – 3 PM"    },
      { label: "Dinner",     time: "3:30 PM – 10 PM" },
      { label: "Late Night", time: "10 PM – 12 AM"   },
    ],
  },
];

const barHours = [
  { days: "Monday – Thursday", weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday"], time: "11 AM – 2 AM" },
  { days: "Friday",            weekdays: ["Friday"],                                     time: "11 AM – 3 AM" },
  { days: "Saturday",          weekdays: ["Saturday"],                                   time: "11 AM – 3 AM" },
  { days: "Sunday",            weekdays: ["Sunday"],                                     time: "11 AM – 2 AM" },
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
        cursiveTitle
      />

      {/* Hours + Address */}
      <SectionWrapper bg="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* Hours */}
          <div className="lg:col-span-1 space-y-10">
            <SectionHeading label="When We're Open" title="Hours" center={false} />

            {/* Kitchen */}
            <div>
              <p className="section-label mb-4">Kitchen</p>
              <div className="space-y-0 text-sm">
                {kitchenHours.map(({ days, weekdays, periods }) => {
                  const isToday = weekdays.includes(today);
                  return (
                    <div
                      key={days}
                      className={`border-b border-[#C9A86A]/10 last:border-0 py-3 ${
                        isToday ? "text-[#C9A86A]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 font-medium mb-2">
                        {days}
                        {isToday && (
                          <span className="text-[0.6rem] uppercase tracking-widest text-[#C9A86A] bg-[#C9A86A]/10 px-2 py-0.5">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        {periods.map(({ label, time }) => (
                          <div key={label} className="flex justify-between text-xs">
                            <span className={isToday ? "text-[#C9A86A]/70" : "text-[#8A7D6E]"}>{label}</span>
                            <span className={isToday ? "text-[#C9A86A]" : "text-[#C7C7C7]"}>{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bar */}
            <div>
              <p className="section-label mb-4">Bar</p>
              <div className="space-y-0 text-sm">
                {barHours.map(({ days, weekdays, time }) => {
                  const isToday = weekdays.includes(today);
                  return (
                    <div
                      key={days}
                      className={`border-b border-[#C9A86A]/10 last:border-0 flex items-center justify-between py-3 ${
                        isToday ? "text-[#C9A86A]" : ""
                      }`}
                    >
                      <span className="font-medium">
                        {days}
                        {isToday && (
                          <span className="ml-2 text-[0.6rem] uppercase tracking-widest text-[#C9A86A] bg-[#C9A86A]/10 px-2 py-0.5">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={isToday ? "text-[#C9A86A]" : "text-[#C7C7C7]"}>{time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
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

        {/* Map */}
        <div className="border border-[#C9A86A]/20 overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=749+Wharf+St+SW,+Washington,+DC+20024&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kirwan's on the Wharf location"
          />
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

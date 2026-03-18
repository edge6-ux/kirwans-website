"use client";

import { useState } from "react";
import Button from "./Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form,       setForm]       = useState<FormState>(INITIAL);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <span className="text-[#C9A86A] text-5xl mb-6">☘</span>
        <h3
          className="text-[#F5F5F5] text-3xl mb-3"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Sláinte!
        </h3>
        <p className="text-[#C7C7C7] mb-8">
          Your message has been received. We&#39;ll be in touch soon.
        </p>
        <Button variant="outline" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>
          Send Another Message
        </Button>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-[#0B0B0C] border border-[#1C1C1E] text-[#F5F5F5] placeholder-[#C7C7C7]/40 px-5 py-3.5 text-sm focus:outline-none focus:border-[#C9A86A]/60 hover:border-[#C9A86A]/30 transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="section-label block mb-2">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="section-label block mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="section-label block mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(202) 555-0000"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="section-label block mb-2">Subject *</label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="" disabled>Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="private-events">Private Events</option>
            <option value="feedback">Feedback</option>
            <option value="press">Press & Media</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="section-label block mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full sm:w-auto"
      >
        {submitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

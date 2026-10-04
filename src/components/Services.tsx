"use client";
import React, { useState } from "react";

const services = [
  {
    id: "01",
    icon: "self_improvement",
    badge: "Retreats",
    titleHindi: "आध्यात्मिक अनुष्ठान एवं ध्यान शिविर",
    titleEn: "Spiritual Retreats",
    tagline: "Peace · Meditation · Self-Discovery",
    description:
      "Peace, meditation aur self-discovery ke curated retreats. Escape the noise of modern life and immerse yourself in sacred solitude on the banks of holy river Narmada.",
    highlights: [
      "Guided inner silence (Mauna) practices",
      "Meditation & self-inquiry sessions",
      "Peaceful ashram environment",
      "Curated 3-day to 7-day retreats",
    ],
    packages: ["3-Day Retreat", "7-Day Retreat", "Custom Stay"],
    color: "bg-tertiary-fixed/10 border-tertiary/30",
    iconColor: "text-tertiary",
    accentColor: "bg-tertiary-fixed/20 text-tertiary",
  },
  {
    id: "02",
    icon: "fitbit_push_ups",
    badge: "Yoga & Mind",
    titleHindi: "योग, ध्यान एवं सचेतनता",
    titleEn: "Yoga & Meditation",
    tagline: "Asana · Pranayama · Mindfulness",
    description:
      "Guided yoga, meditation aur mindfulness sessions. Learn classical Hatha yoga, breathwork techniques, and deep relaxation to harmonize body, mind, and spirit.",
    highlights: [
      "Daily morning riverbank yoga",
      "Pranayama & breath control guidance",
      "Mindfulness & relaxation techniques",
      "Suitable for beginners to advanced seekers",
    ],
    packages: ["Daily Morning Sessions", "Weekly Immersion", "Pranayama Workshop"],
    color: "bg-secondary-container/20 border-secondary/30",
    iconColor: "text-secondary",
    accentColor: "bg-secondary-container text-secondary",
  },
  {
    id: "03",
    icon: "record_voice_over",
    badge: "Satsang & Guidance",
    titleHindi: "सत्संग एवं व्यक्तिगत आध्यात्मिक मार्गदर्शन",
    titleEn: "Satsang & Spiritual Guidance",
    tagline: "Pravachan · Doubts Resolution · Guru Kripa",
    description:
      "Baba Ji ke satsang, pravachan aur personal spiritual guidance. Seek answers to life's deeper questions through enlightened discourses and one-on-one interaction.",
    highlights: [
      "Daily Satsang & spiritual discourses",
      "Scriptural wisdom & Q&A sessions",
      "Personal one-on-one guidance with Baba Ji",
      "Clarity on spiritual path & life struggles",
    ],
    packages: ["Daily Evening Satsang", "Personal Guidance", "Scripture Study"],
    color: "bg-primary-container/30 border-primary/20",
    iconColor: "text-primary",
    accentColor: "bg-primary-container text-on-primary-container",
  },
  {
    id: "04",
    icon: "bed",
    badge: "Accommodation",
    titleHindi: "आश्रम आवास एवं सात्विक जीवन",
    titleEn: "Ashram Accommodation",
    tagline: "Sattvic Meals · Peaceful Stay · Serene Campus",
    description:
      "Peaceful stay with simple, sattvic ashram living. Clean rooms, wholesome vegetarian meals cooked with devotion, and pristine surroundings for spiritual contemplation.",
    highlights: [
      "Clean & peaceful residential rooms",
      "Three wholesome sattvic meals daily",
      "Serene riverfront environment",
      "Short-term and extended stay options",
    ],
    packages: ["Standard Ashram Room", "Riverview Room", "Sattvic Food Included"],
    color: "bg-tertiary-fixed/10 border-tertiary/30",
    iconColor: "text-tertiary",
    accentColor: "bg-tertiary-fixed/20 text-tertiary",
  },
  {
    id: "05",
    icon: "volunteer_activism",
    badge: "Community Seva",
    titleHindi: "निःस्वार्थ सेवा एवं अन्नदान",
    titleEn: "Seva & Volunteering",
    tagline: "Annadan · Ashram Seva · Community Support",
    description:
      "Community service, annadan aur ashram seva opportunities. Engage in selfless service, help feed pilgrims (Annakshetra), and participate in ashram maintenance.",
    highlights: [
      "Daily Annakshetra (Free Food Distribution)",
      "Volunteer opportunities in garden & ashram",
      "Service to visiting pilgrims & sadhus",
      "Cultivate humility through Karma Yoga",
    ],
    packages: ["Karma Yoga Volunteer", "Annadan Sponsorship", "Ashram Seva"],
    color: "bg-secondary-container/20 border-secondary/30",
    iconColor: "text-secondary",
    accentColor: "bg-secondary-container text-secondary",
  },
  {
    id: "06",
    icon: "event",
    badge: "Events & Camps",
    titleHindi: "आध्यात्मिक उत्सव एवं विशेष शिविर",
    titleEn: "Spiritual Events & Camps",
    tagline: "Festivals · Workshops · Special Gatherings",
    description:
      "Festivals, workshops, meditation camps aur special gatherings. Celebrate sacred occasions like Mahashivratri, Navratri, and Guru Purnima with grand rituals and intense sadhana.",
    highlights: [
      "Special Meditation & Sadhana Camps",
      "Vedic festival celebrations & Yajnas",
      "Intensive weekend workshops",
      "Community spiritual gatherings",
    ],
    packages: ["Sadhana Camps", "Festival Gatherings", "Weekend Workshops"],
    color: "bg-primary-container/30 border-primary/20",
    iconColor: "text-primary",
    accentColor: "bg-primary-container text-on-primary-container",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section
      className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto"
      id="services"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-tertiary"></span>
          <span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider">
            सेवाएँ एवं सुविधाएँ
          </span>
          <span className="w-8 h-[1px] bg-tertiary"></span>
        </div>
        <h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
          हमारी प्रमुख सेवाएँ
        </h2>
        <p className="text-headline-sm font-headline-sm text-primary mb-3">
          Our Services & Offerings
        </p>
        <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
          Shridhyan Ashram offers authentic spiritual retreats, yoga & meditation,
          satsang, simple ashram living, and selfless community seva.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={activeService === index}
            onToggle={() =>
              setActiveService(activeService === index ? null : index)
            }
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-surface-container-low border border-outline-variant/30 rounded-sm p-10 gilded-inset">
        <span className="material-symbols-outlined text-tertiary text-4xl mb-3 block">
          volunteer_activism
        </span>
        <h3 className="font-devanagari text-2xl font-semibold text-primary mb-3">
          सेवा में रुचि है? हमसे संपर्क करें।
        </h3>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto mb-6">
          Enquire about any of our services, book a retreat package, or
          register for the next yoga TTC batch. Our ashram office responds
          within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="inline-flex items-center gap-2 bg-tertiary hover:bg-tertiary-container text-on-tertiary px-8 py-3 rounded-sm font-label-lg text-label-lg tracking-wide transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            href="#visit"
          >
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            <span>Book a Retreat / Enquire</span>
          </a>
          <a
            className="inline-flex items-center gap-2 bg-surface hover:bg-surface-container text-primary border border-outline-variant/40 px-8 py-3 rounded-sm font-label-lg text-label-lg tracking-wide transition-all duration-300"
            href="mailto:shridhyan.com@gmail.com"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>shridhyan.com@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isActive,
  onToggle,
}: {
  service: (typeof services)[0];
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-surface-container-low border rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md group cursor-pointer ${service.color}`}
      onClick={onToggle}
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center ${service.accentColor}`}
            >
              <span className="material-symbols-outlined text-2xl">
                {service.icon}
              </span>
            </div>
            <div>
              <span
                className={`text-[10px] font-label-sm uppercase tracking-widest px-2 py-0.5 rounded ${service.accentColor}`}
              >
                {service.badge}
              </span>
              <div className="text-xs text-outline mt-0.5 font-devanagari">
                {service.tagline}
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold text-outline-variant/60 font-devanagari">
            {service.id}
          </span>
        </div>

        <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-1 group-hover:text-tertiary transition-colors leading-snug">
          {service.titleHindi}
        </h3>
        <p className="text-label-md font-label-md text-secondary mb-3 tracking-wide">
          {service.titleEn}
        </p>
        <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Expandable Details */}
      <div
        className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-2 border-t border-outline-variant/20 pt-4">
          <h4 className="text-label-sm font-label-sm text-tertiary uppercase tracking-widest mb-3">
            ✦ Highlights
          </h4>
          <ul className="space-y-1.5 mb-4">
            {service.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface"
              >
                <span className="material-symbols-outlined text-tertiary text-sm">
                  check_circle
                </span>
                {h}
              </li>
            ))}
          </ul>
          <h4 className="text-label-sm font-label-sm text-tertiary uppercase tracking-widest mb-2">
            ✦ Sample Pricing
          </h4>
          <div className="flex flex-wrap gap-2 pb-4">
            {service.packages.map((pkg, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-surface border border-outline-variant/40 text-on-surface font-medium"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
        <span>{isActive ? "सारांश छुपाएं" : "विस्तार से जानें"}</span>
        <span
          className={`material-symbols-outlined text-sm transition-transform duration-300 ${isActive ? "-rotate-90" : "group-hover:translate-x-1"}`}
        >
          arrow_forward
        </span>
      </div>
    </div>
  );
}

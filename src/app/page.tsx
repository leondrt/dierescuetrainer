import HeroSection from "@/components/sections/hero";
import StatsBar from "@/components/sections/stats-bar";
import CoursesSection from "@/components/sections/courses";
import WhyUsSection from "@/components/sections/why-us";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactCTA from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CoursesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}

import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import {
  AboutBlock,
  ApproachSteps,
  Challenges,
  CTABand,
  Marquee,
  ServicesGrid,
  WhyApex,
} from "@/components/Sections";

export const metadata = {
  title: "Business Consulting in Addison, Illinois",
  description:
    "APEX Facility Consulting LLC helps companies optimize operations, strengthen processes and build strategies for sustainable growth.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Challenges />
      <ServicesGrid showIntro={false} />
      <ApproachSteps />
      <WhyApex />
      <AboutBlock />
      <CTABand />
      <ContactSection />
    </>
  );
}

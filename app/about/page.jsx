import AboutPageContent from "./AboutPageContent";

export const metadata = {
  title: "About Us",
  description:
    "A business consulting and management firm in Addison, Illinois helping companies strengthen structure, processes and strategy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}

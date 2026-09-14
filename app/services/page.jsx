import ServicesPageContent from "./ServicesPageContent";

export const metadata = {
  title: "Services",
  description:
    "Strategic consulting, process optimization, operational consulting, business insights, project management and business growth.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

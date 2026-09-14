import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the APEX Facility Consulting LLC website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <LegalPage docKey="terms" />;
}

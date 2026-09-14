// Datos corporativos — fuente única de verdad (NAP consistente en todo el sitio).
export const COMPANY = {
  legalName: "APEX Facility Consulting LLC",
  shortName: "APEX",
  tagline: "FACILITY CONSULTING",
  phone: "(571) 593-2156",
  phoneHref: "tel:+15715932156",
  email: "info@apexfacilityconsulting.com",
  street: "810 W College Blvd, Apt 102",
  city: "Addison",
  state: "IL",
  zip: "60101",
  country: "USA",
  get addressLine() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=810+W+College+Blvd+Apt+102+Addison+IL+60101",
  siteUrl: "https://www.apexfacilityconsulting.com",
  year: 2026,
};

export const NAV = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "approach", href: "/approach" },
  { key: "contact", href: "/contact" },
];

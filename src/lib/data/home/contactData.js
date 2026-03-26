import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: <Phone size={18} strokeWidth={1.5} />,
    label: "Phone",
    value: "02-XXX-XXXX",
    href: "tel:02XXXXXXX",
  },
  {
    icon: <Mail size={18} strokeWidth={1.5} />,
    label: "Email",
    value: "info@lofthaus.co.th",
    href: "mailto:info@lofthaus.co.th",
  },
  {
    icon: <MapPin size={18} strokeWidth={1.5} />,
    label: "Address",
    value: "ถ.รังสิต-นครนายก, ต.ประชาธิปัตย์, อ.ธัญบุรี, จ.ปทุมธานี 12130",
    href: "https://maps.google.com",
  },
];

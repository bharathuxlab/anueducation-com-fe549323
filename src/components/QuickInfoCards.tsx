import { Link } from "react-router-dom";
import { Eye, Building2, MapPin, GraduationCap, BookOpen, Monitor, Briefcase } from "lucide-react";
import anuEmblem from "@/assets/anu-emblem.png";

const cards = [
  {
    title: "Vision & Mission",
    description: "To generate sources of knowledge that dispel ignorance and establish truth...",
    icon: Eye,
    link: "/about#vision",
  },
  {
    title: "Organization Structure",
    description: "Acharya Nagarjuna University Organization Structure",
    icon: Building2,
    link: "/administration",
  },
  {
    title: "Campus",
    description: "Acharya Nagarjuna University is a state university in Namburu, Guntur district...",
    icon: MapPin,
    link: "/about#location",
  },
];

const facilities = [
  {
    title: "Programmes Offered",
    description: "We offer a variety of programmes in Engineering, Sciences, Arts, Pharmacy, Sports & Architecture.",
    icon: GraduationCap,
    link: "/academics",
  },
  {
    title: "Library",
    description: "University Central Library",
    icon: BookOpen,
    link: "/academics",
  },
  {
    title: "IT Facility",
    description: "Data Center",
    icon: Monitor,
    link: "/about",
  },
  {
    title: "Placements",
    description: "ANU Placements",
    icon: Briefcase,
    link: "/about",
  },
];

const QuickInfoCards = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Address bar */}
        <div className="p-10 mb-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <img src={anuEmblem} alt="ANU Emblem" className="w-44 h-44 object-contain" />
          <div>
            <h3 className="font-bold text-foreground text-3xl md:text-4xl mb-3">Acharya Nagarjuna University</h3>
            <p className="text-muted-foreground text-lg md:text-xl flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={22} className="text-primary shrink-0" />
              NH16, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <Link to={card.link} key={card.title} className="anu-card p-6 group hover:shadow-lg transition-shadow">
              <card.icon size={28} className="text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
              <span className="text-sm font-semibold text-primary group-hover:underline">Read More</span>
            </Link>
          ))}
        </div>

        {/* Facilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f) => (
            <Link to={f.link} key={f.title} className="anu-card p-5 text-center group hover:shadow-lg transition-shadow">
              <f.icon size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground text-sm mb-1">{f.title}</h4>
              <p className="text-xs text-muted-foreground">{f.description}</p>
              <span className="text-xs font-semibold text-primary mt-2 inline-block group-hover:underline">Learn More</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;

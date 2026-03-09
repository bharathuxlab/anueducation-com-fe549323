import { Link } from "react-router-dom";
import { Eye, Building2, MapPin, GraduationCap, BookOpen, Monitor, Briefcase, ArrowRight } from "lucide-react";
import anuEmblem from "@/assets/anu-emblem.png";

const cards = [
  {
    title: "Vision & Mission",
    description: "To generate sources of knowledge that dispel ignorance and establish truth through teaching, learning and research.",
    icon: Eye,
    link: "/about#vision",
    accent: "from-primary/10 to-secondary/5",
  },
  {
    title: "Organization Structure",
    description: "Acharya Nagarjuna University's administrative framework ensuring excellence in governance and academics.",
    icon: Building2,
    link: "/administration",
    accent: "from-accent/10 to-primary/5",
  },
  {
    title: "Campus",
    description: "A sprawling 293-acre campus on NH-16 between Vijayawada and Guntur, equipped with world-class facilities.",
    icon: MapPin,
    link: "/about#location",
    accent: "from-secondary/10 to-anu-green/5",
  },
];

const facilities = [
  {
    title: "Programmes Offered",
    description: "68+ UG, PG & Doctoral programmes across Engineering, Sciences, Arts, Pharmacy & more.",
    icon: GraduationCap,
    link: "/academics",
  },
  {
    title: "Central Library",
    description: "A rich repository of 2 lakh+ books, journals and digital resources.",
    icon: BookOpen,
    link: "/academics",
  },
  {
    title: "IT Infrastructure",
    description: "State-of-the-art data center and campus-wide digital connectivity.",
    icon: Monitor,
    link: "/about",
  },
  {
    title: "Placements",
    description: "Dedicated placement cell with 100+ recruiting partners.",
    icon: Briefcase,
    link: "/placements-gallery",
  },
];

const QuickInfoCards = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Address bar */}
        <div className="p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left rounded-2xl bg-gradient-to-br from-muted to-background border border-border">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-md" />
            <img src={anuEmblem} alt="ANU Emblem" className="relative w-36 h-36 md:w-44 md:h-44 object-contain" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-2">Acharya Nagarjuna University</h3>
            <p className="text-muted-foreground text-lg flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={20} className="text-primary shrink-0" />
              NH-16, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <Link
              to={card.link}
              key={card.title}
              className="anu-card group p-0 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${card.accent} p-6 pb-0`}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <card.icon size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6 pt-4">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Facilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f) => (
            <Link
              to={f.link}
              key={f.title}
              className="anu-card p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                <f.icon size={30} className="text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{f.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{f.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;

import { GraduationCap, BookOpen, Users, Building, Award, FlaskConical } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Students", value: "1,50,000+" },
  { icon: Building, label: "Affiliated Colleges", value: "400+" },
  { icon: BookOpen, label: "Courses", value: "200+" },
  { icon: Users, label: "Faculty", value: "500+" },
  { icon: FlaskConical, label: "Research Centres", value: "80+" },
  { icon: Award, label: "Years of Excellence", value: "48+" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-anu-dark to-anu-nav relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary-foreground/8 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-primary-foreground/15 transition-all duration-300 group-hover:scale-110">
                <stat.icon size={30} className="text-secondary" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-anu-footer-fg font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

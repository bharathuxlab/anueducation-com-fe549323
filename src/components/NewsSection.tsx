import { FileText, ExternalLink, Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  { title: "M.Phil. Part-1/ Pre.Ph.D-2025 Exams Notification", date: "28 Feb 2026", tag: "Examinations" },
  { title: "Advertisement for Research Project Fellowship — University College of Pharmaceutical Sciences", date: "25 Feb 2026", tag: "Research" },
  { title: "Skill Training Programme for Students — Foundational Skills", date: "22 Feb 2026", tag: "Training" },
  { title: "Applications invited for UG/PG Admissions 2026-27", date: "20 Feb 2026", tag: "Admissions" },
  { title: "Re-valuation Application Form — Last Date Extended", date: "18 Feb 2026", tag: "Examinations" },
  { title: "Guidelines for preparation of MBA Project Report", date: "15 Feb 2026", tag: "Guidelines" },
  { title: "Workshop on NEP 2020 Implementation in Higher Education", date: "12 Feb 2026", tag: "Events" },
  { title: "Advertisement for Guest Faculty Positions in Various Departments", date: "10 Feb 2026", tag: "Recruitment" },
];

const events = [
  { title: "Annual Convocation Ceremony 2026", date: "15 Mar 2026" },
  { title: "National Science Day Celebrations", date: "28 Feb 2026" },
  { title: "Inter-University Sports Meet", date: "10 Mar 2026" },
  { title: "International Conference on AI & Data Science", date: "20 Mar 2026" },
];

const tagColors: Record<string, string> = {
  Examinations: "bg-primary/10 text-primary",
  Research: "bg-accent/10 text-accent",
  Training: "bg-anu-green/10 text-anu-green",
  Admissions: "bg-secondary/15 text-secondary-foreground",
  Guidelines: "bg-muted text-muted-foreground",
  Events: "bg-primary/10 text-primary",
  Recruitment: "bg-accent/10 text-accent",
};

const NewsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-anu-news">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="anu-section-title">Latest News & Notifications</h2>
            <div className="space-y-3">
              {newsItems.map((item, i) => (
                <div
                  key={i}
                  className="anu-card flex items-start gap-4 p-5 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <FileText size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full ${tagColors[item.tag] || "bg-muted text-muted-foreground"}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={11} /> {item.date}
                      </span>
                    </div>
                    <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <h2 className="anu-section-title">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, i) => {
                const [day, month] = event.date.split(" ");
                return (
                  <div key={i} className="anu-card p-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-b from-primary to-anu-maroon text-primary-foreground text-center rounded-xl p-3 min-w-[56px]">
                        <div className="text-xl font-display font-bold leading-none">{day}</div>
                        <div className="text-[10px] uppercase tracking-wider mt-0.5 font-semibold opacity-80">{month}</div>
                      </div>
                      <p className="text-sm font-semibold text-foreground leading-snug">{event.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <h2 className="anu-section-title mt-10">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Results", "Examinations", "Admissions", "Scholarships", "Library", "ANUCDE", "RTI", "NIRF"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="anu-card p-3 text-sm text-center font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center gap-1 group"
                  >
                    {link}
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

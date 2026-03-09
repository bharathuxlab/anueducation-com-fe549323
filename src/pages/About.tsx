import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Building2, Users, MapPin, History, Eye, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="anu-page-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative z-10">
          <h1>About Acharya Nagarjuna University</h1>
          <p>Established 1976 · NAAC A+ Grade · Andhra Pradesh</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <section id="profile" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-anu-maroon mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 size={22} className="text-primary" />
            </div>
            University Profile
          </h2>
          <div className="anu-card p-6 md:p-8 space-y-4">
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              Acharya Nagarjuna University is a state university located at Nagarjuna Nagar, Guntur, Andhra Pradesh, India.
              It was established in 1976 through Act 43 of the Andhra Pradesh State Legislature. The University is named after
              the great Buddhist philosopher Acharya Nagarjuna, who founded a center of learning on the banks of the river Krishna centuries ago.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The University has grown to become one of the largest affiliating universities in Andhra Pradesh with over 400
              affiliated colleges spread across the districts of Guntur, Prakasam, and Palnadu. It offers programs in Arts,
              Science, Commerce, Engineering, Medicine, Law, Education, and various professional courses.
            </p>
          </div>
        </section>

        <section id="history" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-anu-maroon mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <History size={22} className="text-primary" />
            </div>
            History
          </h2>
          <div className="anu-card p-6 md:p-8">
            <p className="text-foreground leading-relaxed">
              The name Nagarjuna University is significant — the great Buddhist preceptor and philosopher Acharya Nagarjuna
              established a University on the banks of river Krishna centuries ago, making it a great centre of learning that
              attracted teachers and students from distant parts of the world. The University was established by Act 43 of 1976
              of A.P. State Legislature and governed by Act 4 of 1991 covering 6 Universities of the State.
            </p>
          </div>
        </section>

        <section id="vision" className="mb-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-anu-maroon mb-8 text-center">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="anu-card p-0 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <Eye size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-anu-maroon">Vision</h3>
              </div>
              <div className="p-6 pt-4">
                <p className="text-foreground leading-relaxed">
                  To generate sources of knowledge that dispel ignorance and establish truth through teaching, learning and research.
                </p>
              </div>
            </div>
            <div className="anu-card p-0 overflow-hidden">
              <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-6 pb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-3">
                  <Target size={24} className="text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-anu-maroon">Mission</h3>
              </div>
              <div className="p-6 pt-4">
                <p className="text-foreground leading-relaxed">
                  To promote a bank of human talent in diversified faculties that would become an investment for a prosperous society.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-anu-maroon mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin size={22} className="text-primary" />
            </div>
            Location
          </h2>
          <div className="anu-card p-6 md:p-8 mb-4">
            <p className="text-foreground leading-relaxed">
              The University campus is spread over 293 acres at Nagarjuna Nagar, located 12 km from Guntur city
              and 35 km from Vijayawada. The campus is well-connected by road and rail.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="ANU Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.2!2d80.5!3d16.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzAwLjAiTiA4MMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-anu-maroon mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen size={22} className="text-primary" />
            </div>
            Courses Offered
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Under Graduate", courses: ["B.A.", "B.Sc.", "B.Com.", "BBA", "B.Tech", "B.Pharm", "BCA", "B.Ed."], color: "from-primary/10 to-primary/5" },
              { title: "Post Graduate", courses: ["M.A.", "M.Sc.", "M.Com.", "MBA", "M.Tech", "M.Pharm", "MCA", "M.Ed."], color: "from-accent/10 to-accent/5" },
              { title: "Research", courses: ["M.Phil.", "Ph.D.", "D.Sc.", "D.Litt.", "Post Doctoral"], color: "from-secondary/10 to-secondary/5" },
            ].map((cat) => (
              <div key={cat.title} className="anu-card p-0 overflow-hidden">
                <div className={`bg-gradient-to-r ${cat.color} p-5`}>
                  <h3 className="font-display font-bold text-foreground text-lg">{cat.title}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {cat.courses.map((c) => (
                      <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;

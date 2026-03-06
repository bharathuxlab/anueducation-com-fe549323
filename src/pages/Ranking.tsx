import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Trophy, Star, Shield } from "lucide-react";

const rankings = [
  {
    id: "green-metric-2022",
    title: "UI Green Metric Rankings 2022",
    subtitle: "World's Most Sustainable University in 2022",
    icon: Trophy,
    description:
      "Acharya Nagarjuna University has been ranked among the World's Most Sustainable Universities in 2022 by the UI GreenMetric World University Rankings, recognizing the university's commitment to sustainability and environmental responsibility.",
  },
  {
    id: "green-award-2021",
    title: "International Green University Award 2021",
    subtitle: "Accepting Responsibility to the Pupil and Planet 2021",
    icon: Award,
    description:
      "ANU received the prestigious International Green University Award in 2021, acknowledging the university's dedication to environmental sustainability and green campus initiatives.",
  },
  {
    id: "green-metric-2021",
    title: "UI Green Metric Rankings 2021",
    subtitle: "World's Most Sustainable University in 2021",
    icon: Trophy,
    description:
      "Acharya Nagarjuna University was recognized as one of the World's Most Sustainable Universities in 2021 by UI GreenMetric, reflecting its continuous efforts in sustainability practices across campus operations.",
  },
  {
    id: "naac",
    title: "NAAC Accreditation",
    subtitle: "Accredited with 'A' Grade by NAAC",
    icon: Star,
    description:
      "The National Assessment and Accreditation Council (NAAC) has accredited Acharya Nagarjuna University with an 'A' Grade, reflecting the high standards of teaching, research, and infrastructure maintained by the university.",
  },
  {
    id: "nirf",
    title: "NIRF Ranking",
    subtitle: "National Institutional Ranking Framework",
    icon: Shield,
    description:
      "ANU has been consistently ranked in the NIRF (National Institutional Ranking Framework) by the Ministry of Education, Government of India, recognizing academic excellence and research output.",
  },
  {
    id: "nba",
    title: "NBA Accreditation",
    subtitle: "National Board of Accreditation",
    icon: Award,
    description:
      "Several programmes at Acharya Nagarjuna University have been accredited by the National Board of Accreditation (NBA), ensuring quality standards in engineering and technology education.",
  },
  {
    id: "iso",
    title: "ISO Certification",
    subtitle: "ISO 9001:2015 Certified University",
    icon: Shield,
    description:
      "Acharya Nagarjuna University holds ISO 9001:2015 certification, demonstrating its commitment to quality management systems in education and administration.",
  },
  {
    id: "ariia",
    title: "ARIIA Ranking",
    subtitle: "Atal Ranking of Institutions on Innovation Achievements",
    icon: Star,
    description:
      "ANU has been recognized in the ARIIA rankings for its innovation and entrepreneurship initiatives, encouraging students and faculty to engage in research-driven innovation.",
  },
];

const Ranking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Rankings & Accreditations
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Acharya Nagarjuna University — Recognized for Excellence
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="bg-anu-gold/10 border-b border-border py-6">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-anu-maroon mb-2">
              UI Green Metric Rankings
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-background border border-border rounded-full px-4 py-1.5 font-medium">
                🏆 World's Most Sustainable University 2022
              </span>
              <span className="bg-background border border-border rounded-full px-4 py-1.5 font-medium">
                🌿 International Green University Award 2021
              </span>
              <span className="bg-background border border-border rounded-full px-4 py-1.5 font-medium">
                🏆 World's Most Sustainable University 2021
              </span>
            </div>
          </div>
        </div>

        {/* Rankings Grid */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rankings.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="border border-border rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ranking;

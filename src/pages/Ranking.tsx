import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Trophy, Star, Globe, Leaf, BarChart3, X } from "lucide-react";

const impactRankings = [
  { category: "Affordable and Clean Energy", rank: "401+", year: "2021" },
  { category: "Clean Water and Sanitation", rank: "301-400", year: "2021" },
  { category: "Climate Action", rank: "101-200", year: "2021" },
  { category: "Gender Equality", rank: "401-600", year: "2021" },
  { category: "Good Health and Wellbeing", rank: "801+", year: "2021" },
  { category: "Impact Ranking Overall", rank: "401-600", year: "2020" },
  { category: "Impact Ranking Overall", rank: "601-800", year: "2021" },
  { category: "Life on Land", rank: "301-400", year: "2021" },
  { category: "No Poverty", rank: "301-400", year: "2021" },
  { category: "Partnerships for the Goals", rank: "201-300", year: "2021" },
  { category: "Peace, Justice and Strong Institutions", rank: "601+", year: "2020" },
  { category: "Quality Education", rank: "401-600", year: "2021" },
  { category: "Reduced Inequalities", rank: "301-400", year: "2021" },
  { category: "Zero Hunger", rank: "301-400", year: "2021" },
];

const worldRankings = [
  { category: "THE Subject Ranking 2021", rank: "—", year: "2021" },
  { category: "THE Subject Ranking — Physical Science", rank: "—", year: "2021" },
  { category: "Asia", rank: "251-300", year: "2020" },
  { category: "Asia", rank: "301-350", year: "2021" },
  { category: "Emerging Economies", rank: "251-300", year: "2020" },
  { category: "Emerging Economies", rank: "251-300", year: "2021" },
  { category: "For Engineering", rank: "601-800", year: "2021" },
  { category: "Physical Sciences", rank: "801+", year: "2020" },
  { category: "Ranking", rank: "801-1000", year: "2020" },
  { category: "World University", rank: "1001-1200", year: "2022" },
  { category: "Young", rank: "251-300", year: "2020" },
  { category: "Young", rank: "251-300", year: "2021" },
];

const Ranking = () => {
  const [nirfOpen, setNirfOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
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

        {/* Section 1: Rankings Overview */}
        <section id="overview" className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Acharya Nagarjuna University
          </h2>
          <div className="prose max-w-none text-muted-foreground space-y-4">
            <p>
              Acharya Nagarjuna University (ANU), established in 1976, has consistently strived to excel in education and research, earning a prominent place among educational institutions in India. The university's commitment to academic excellence and innovation has garnered recognition from various esteemed ranking organizations.
            </p>
            <p>
              ANU's proactive approach towards enhancing its global presence led to the establishment of the University Rankings office in 2016, which focuses on promoting the University on an International platform. This initiative was undertaken to showcase ANU's achievements, academic prowess, and research contributions to a wider audience.
            </p>
            <p>
              ANU's performance has earned appreciation from renowned ranking institutions such as NIRF (National Institutional Ranking Framework), TIMES Higher Education, QS (Quacquarelli Symonds), UI Greenmetric World University Rankings and ISO (International Organization for Standardization). These rankings reflect the university's commitment to maintaining high academic standards, facilitating cutting-edge research, fostering a vibrant learning environment, and providing top-notch infrastructure.
            </p>
            <p>
              ANU's consistent presence in these prestigious rankings is a testament to its dedication to quality education and research across diverse disciplines. As the university continues to evolve and adapt to meet the ever-changing educational landscape, its recognition in global rankings serves as an indicator of its stature and contribution to higher education.
            </p>
            <p>
              For more detailed information about Acharya Nagarjuna University's rankings, academic programs, research initiatives, and accomplishments, please feel free to inquire further.
            </p>
          </div>
        </section>

        {/* Section 2: NIRF */}
        <section id="nirf" className="bg-muted/30 py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 rounded-full p-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">NIRF</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              National Institutional Ranking Framework — Ministry of Education, Government of India
            </p>
            <button
              onClick={() => setNirfOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Star className="h-4 w-4" />
              View NIRF Report 2023
            </button>
          </div>
        </section>

        {/* NIRF PDF Modal */}
        {nirfOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg w-full max-w-6xl h-[85vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-bold text-foreground">NIRF Report 2023</h3>
                <button
                  onClick={() => setNirfOpen(false)}
                  className="rounded-sm p-1 hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
              <div className="flex-1 p-2">
                <iframe
                  src="/documents/nirfanu2023.pdf"
                  className="w-full h-full rounded"
                  title="NIRF Report 2023"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Green Metric Rankings */}
        <section id="green-metric" className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent rounded-full p-3">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">UI Green Metric Rankings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "World's Most Sustainable University 2022",
                subtitle: "UI Green Metric Rankings",
                icon: Trophy,
              },
              {
                title: "International Green University Award 2021",
                subtitle: "UI Green Metric Rankings",
                icon: Award,
              },
              {
                title: "Accepting Responsibility to the Pupil and Planet 2021",
                subtitle: "Green University Award",
                icon: Award,
              },
              {
                title: "World's Most Sustainable University 2021",
                subtitle: "UI Green Metric Rankings",
                icon: Trophy,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3 shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Impact Ranking */}
        <section id="impact-ranking" className="bg-muted/30 py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-full p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Impact Ranking</h2>
                <p className="text-sm text-muted-foreground">Acharya Nagarjuna University</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-4 py-3 font-semibold">Category</th>
                    <th className="text-left px-4 py-3 font-semibold">Rank</th>
                    <th className="text-left px-4 py-3 font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {impactRankings.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-4 py-3 text-sm text-foreground">{item.category}</td>
                      <td className="px-4 py-3 text-sm font-medium text-primary">{item.rank}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: World University Ranking */}
        <section id="world-university" className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 rounded-full p-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">World University Rankings</h2>
              <p className="text-sm text-muted-foreground">Acharya Nagarjuna University</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-semibold">Category</th>
                  <th className="text-left px-4 py-3 font-semibold">Rank</th>
                  <th className="text-left px-4 py-3 font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                {worldRankings.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="px-4 py-3 text-sm text-foreground">{item.category}</td>
                    <td className="px-4 py-3 text-sm font-medium text-primary">{item.rank}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ranking;

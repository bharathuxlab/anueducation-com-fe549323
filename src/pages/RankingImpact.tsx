import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe } from "lucide-react";

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

const RankingImpact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Impact Ranking
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Acharya Nagarjuna University
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-10">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RankingImpact;

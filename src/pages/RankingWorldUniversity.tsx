import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

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

const RankingWorldUniversity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              World University Rankings
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Acharya Nagarjuna University
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-10">
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

export default RankingWorldUniversity;

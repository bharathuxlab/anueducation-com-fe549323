import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Trophy, Leaf } from "lucide-react";

const greenMetricItems = [
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
];

const RankingGreenMetric = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              UI Green Metric Rankings
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Acharya Nagarjuna University
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent rounded-full p-3">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">UI Green Metric Rankings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greenMetricItems.map((item, idx) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default RankingGreenMetric;

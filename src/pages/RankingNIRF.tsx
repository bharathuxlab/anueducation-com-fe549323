import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, Star, X } from "lucide-react";

const RankingNIRF = () => {
  const [nirfOpen, setNirfOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              NIRF Ranking
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              National Institutional Ranking Framework
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">NIRF</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            National Institutional Ranking Framework — Ministry of Education, Government of India
          </p>
          <button
            onClick={() => setNirfOpen(true)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Star className="h-4 w-4" />
            View NIRF Report 2023
          </button>
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
      </main>
      <Footer />
    </div>
  );
};

export default RankingNIRF;

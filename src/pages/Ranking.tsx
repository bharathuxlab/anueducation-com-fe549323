import Header from "@/components/Header";
import Footer from "@/components/Footer";
import drRavi from "@/assets/dr-ravi.png";
import drSekhar from "@/assets/dr-sekhar.png";

const Ranking = () => {
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

        {/* Rankings Overview */}
        <section className="container mx-auto px-4 py-10">
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

        {/* Coordinators */}
        <section className="bg-muted/30 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              University Rankings Office
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
                <img
                  src={drRavi}
                  alt="Dr. P. Ravi"
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                />
                <h3 className="text-lg font-bold text-foreground">Dr. P. Ravi</h3>
                <p className="text-sm text-primary font-medium">Coordinator</p>
                <p className="text-xs text-muted-foreground mt-1">
                  University Rankings, Acharya Nagarjuna University
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
                <img
                  src={drSekhar}
                  alt="Dr. Ch. Punya Sekhar"
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                />
                <h3 className="text-lg font-bold text-foreground">Dr. Ch. Punya Sekhar</h3>
                <p className="text-sm text-primary font-medium">Assistant Coordinator</p>
                <p className="text-xs text-muted-foreground mt-1">
                  University Rankings, Acharya Nagarjuna University
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ranking;

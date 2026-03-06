import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UniversityColleges = () => {
  const colleges = [
    "University College of Arts, Commerce & Law",
    "University College of Sciences",
    "University College of Physical Education & Sports Sciences",
    "University College of Pharmaceutical Sciences",
    "University College of Architecture & Planning",
    "Dr. YSR ANU College of Engineering & Technology",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">University Colleges</h1>
        <p className="text-center text-muted-foreground mb-8">
          Acharya Nagarjuna University has six campus colleges offering a wide range of programmes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {colleges.map((college, i) => (
            <div key={i} className="anu-card p-6 text-center">
              <h3 className="font-bold text-foreground">{college}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityColleges;

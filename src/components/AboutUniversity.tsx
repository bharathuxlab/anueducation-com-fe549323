import nagarjunaStatue from "@/assets/nagarjuna-statue.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUniversity = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="anu-section-title">About the University</h2>
        <h3 className="font-display text-xl md:text-2xl font-semibold text-center text-anu-maroon mb-10">
          Welcome to Acharya Nagarjuna University
        </h3>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-sm group-hover:blur-md transition-all" />
              <img
                src={nagarjunaStatue}
                alt="Acharya Nagarjuna Statue"
                className="relative w-72 h-auto object-contain rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-5">
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              Acharya Nagarjuna University, a state university established in 1976, has been constantly striving towards achieving progress and expansion during its existence for over four decades. Spread over 300 acres on the National Highway (NH-16) between Vijayawada and Guntur, the University is one of the front ranking and fastest expanding Universities in Andhra Pradesh.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              The university was inaugurated on 11th September, 1976 by the then President of India, Sri Fakruddin Ali Ahmed. The National Assessment and Accreditation Council (NAAC) awarded A+ grade to Acharya Nagarjuna University. It is named after Acharya Nagarjuna — one of the most brilliant preceptors and philosophers.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              With campus student strength of over 5,000, the University offers instruction for higher learning in 68 UG & PG programs and guidance for the award of M.Phil and Ph.D in 48 disciplines spread over six campus colleges.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-2"
            >
              Learn More About ANU <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;

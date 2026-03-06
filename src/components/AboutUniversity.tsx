import nagarjunaStatue from "@/assets/nagarjuna-statue.png";

const AboutUniversity = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="anu-section-title">About the University</h2>
        <h3 className="text-xl font-semibold text-center text-anu-maroon mb-8">
          Welcome to Acharya Nagarjuna University
        </h3>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={nagarjunaStatue}
              alt="Acharya Nagarjuna Statue"
              className="w-64 h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-foreground leading-relaxed mb-4">
              Acharya Nagarjuna University, a state university established in 1976, has been constantly striving towards achieving progress and expansion during its existence for over four decades, in terms of introducing new courses in the University Colleges, affiliated colleges and professional colleges. Spread over 300 acres of land on the National High Way (NH-16) between Vijayawada and Guntur of Andhra Pradesh, which is declared as state capital of Andhra Pradesh, the University is one of the front ranking and fastest expanding Universities in the state of Andhra Pradesh.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The university was inaugurated on 11th September, 1976 by the then President of India, Sri Fakruddin Ali Ahmed and celebrated its Silver Jubilee in 2001. The National Assessment and Accreditation Council (NAAC) awarded grade to Acharya Nagarjuna University. It is named after Acharya Nagarjuna one of the most brilliant preceptors and philosophers, whose depth of thought, clarity of perception and spiritual insight were such that even after centuries, he is a source of inspiration to a vast number of people in many countries.
            </p>
            <p className="text-foreground leading-relaxed">
              The University is fortunate to be situated on the very soil where he was born and lived, a soil made more sacred by the aspiration for light and a state of wholesomeness by generations of students. With campus student strength of over 5000, the University offers instruction for higher learning in 68 UG & PG programs and guidance for the award of M.Phil and Ph.D in 48 disciplines spread over six campus colleges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;

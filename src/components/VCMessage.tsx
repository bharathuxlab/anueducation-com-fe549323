import vcPhoto from "@/assets/vc-photo.jpg";

const VCMessage = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="anu-section-title">Vice-Chancellor's Message</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4 flex flex-col items-center">
            <img
              src={vcPhoto}
              alt="Vice-Chancellor"
              className="w-56 h-64 object-cover rounded-md shadow-md"
            />
            <h3 className="mt-3 font-bold text-foreground text-center">Prof. Kancharla Gangadhara Rao</h3>
            <p className="text-sm text-muted-foreground text-center">Vice-Chancellor (I/c)</p>
            <p className="text-xs text-muted-foreground text-center">M.Tech., Ph.D.</p>
          </div>
          <div className="md:w-3/4">
            <p className="text-foreground leading-relaxed mb-4 italic">
              'The Highest education is that which does not merely give us information but makes our life in harmony with all existence' – Rabindranath Tagore
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Believing in the dictum "Knowledge is Power", Acharya Nagarjuna University has been delivering, disseminating and is creating human resources with sublime ethical standards. From November 2019 to till date Acharya Nagarjuna University has achieved 108 International Ranks, 39 National Ranks, 03 Certifications, 02 Records, 05 Awards in total 157 in different categories from well reputed World Ranking Organizations like Quacqarelli Symonds (QS), QS I-GAUGE, Times Higher Education (THE), Scimago, UI Green Metrics, National Institutional Ranking Frame Work (NIRF), MHRD – Swatchta Rankings, University Guru, SECA, INDIA TODAY, Green Mentors etc.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Research, Consultancy and Innovations are the pillars for overall holistic education that ANU promotes. Our faculty with celestial standards of teaching, explore the unexplored areas of research in Humanities, Social Sciences, Languages, Literatures, Sciences and contemporary disciplines of knowledge.
            </p>
            <p className="text-foreground leading-relaxed">
              ANU is marching ahead in the right direction, providing a holistic education to the future generations and is playing a positive role in nation building. We reiterate our endeavor to provide premium quality education accessible to all and an environment for the growth of over-all personality development leading to the generation of 'Global Humanists'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VCMessage;
